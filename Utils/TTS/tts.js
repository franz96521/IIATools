
const googleTTS = require('google-tts-api');
function getTTSLink(text) {
    // get audio URL
    const url = googleTTS.getAudioUrl(text, {
        lang: 'en',
        slow: false,
        host: 'https://translate.google.com',
    });
    console.log(url);
    return url;
}
module.exports = { getTTSLink };