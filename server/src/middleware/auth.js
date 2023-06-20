const jwt = require('jsonwebtoken')
const User = require('../models/user')


const auth = async (req, res, next) => {
    try {
        const token = req.cookies?.auth
        // Direct to signin page if user try to access home page straight
        if ( ! token) {
            return res.status(401).send({
                error:  'Token is not available'
            })
            // return res.render('signin', {
            //     authenticateMessage: 'Please authenticate'
            // })
        } 
        
        const decoded = jwt.verify(token, process.env.JWT_ENV)
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})

        if (! user) {
            throw new Error('No matching user ID with token')
    }
    
    req.token = token
    req.user = user
    next()

    } catch (e) {
        res.status(401).send({
            error: 'Please authenticate.'
        })
    }
}

module.exports = auth