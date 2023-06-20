const { GOOGLE_IMG_SCRAP } = require("google-img-scrap");

const getBookImage = async(search) => {
    const test = await GOOGLE_IMG_SCRAP({
        search
        })
        return (test.result[0].url)
}

module.exports = getBookImage