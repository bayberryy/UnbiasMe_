const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')
const getBookImage = require('../utils/google-img-scrap')
const {Configuration, OpenAIApi} = require('openai')
const generateUserPrompt = require('../utils/generate-user-prompt')
const { JsonWebTokenError } = require('jsonwebtoken')

// User signup
router.post('/signup', async (req, res) => {
    const user = new User(req.body)
    
    try {
        const token = await user.generateAuthToken()
        await user.save()
        console.log(`User with id: ${user.id} is saved`)
        // res.render('home', {
        //     id: user.id,
        //     token: token
        // })
        res.cookie("auth", token)
        res.send({
            id: user.id
        })
        // res.redirect('/home');
    }
    catch (e) {
        console.log('User not saved due to following error:', e.message)
        res.status(400).send({
            message: e.message,
            user: user.username
        })
        // res.render('signup', {
        //     error: e.message,
        //     user: user.username
        // })        
    } 
})

// User signin
router.post('/signin', async (req, res) => {
    try {
    const user = await User.findByCredentials(req.body.username, req.body.password)
    const token = await user.generateAuthToken()
    console.log(`User with id ${user.id} has logged in`)
    res.cookie("auth", token)

    res.send({user, token})
    // res.redirect('/home')
    
    } catch (e) {
        console.log(`Could not login due to error: ${e.message}`)
        res.status(400).send({
            message: e.message
        })
        // res.render('signin', {
        //     error: e.message
        // })
    }
})

// User signout
router.post('/signout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter( (token) => {
            return token.token !== req.cookies?.auth
        }) 
        console.log(`User with id ${req.user.id} has logged out`)
        console.log(`Token from user is removed :${req.cookies.auth}`)
        res.clearCookie('auth')
        await req.user.save()
        res.send(`${req.user.id} signed has logged out`)
        // res.send()

    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})

// User IAT recommendation
router.post('/iatrecommendation', async (req, res) => {
    try{
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        })
        const openai = new OpenAIApi(configuration)

        if (!configuration.apiKey) {
            res.status(500).json({
            error: {
                message: "OpenAI API key not configured, please follow instructions in README.md",
            }
            })
        }
        const implicitBias = req.body?.implicitBias || 'Gender' // change to req.body.implicitBias after changing to POST 

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo", // text-davinci-003
            // prompt: generatePrompt(animal),
            messages: [{role: "user", content: generateUserPrompt(implicitBias)}],
            temperature: 0.6,
        })

        const jsonObject = JSON.parse(completion.data.choices[0].message.content)

        for (let i=0; i < jsonObject.length; i++) {
            const search = `${jsonObject[i].title} by ${jsonObject[i].author}`
            const imageUrl = await getBookImage(search);
            jsonObject[i].imageUrl = imageUrl
            }

        res.send({
            jsonObject
        })
    } catch (e) {
        res.status(400).send({
            message: e.message
        })
    }
})


module.exports = router