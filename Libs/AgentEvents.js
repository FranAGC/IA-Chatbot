const fallbackLogs = require("../models/fallback");
const conversationLog = require("../models/conversationLogs");

const logFallback = (sentence, userID, guesses) => {
    new fallbackLogs({
        sentence,
        userID,
        guesses
    }).save()
        .then(() => {
        }).catch((err) => {
            console.error(err)
        })
}

const logConversation = (sentence, userID) => {
    const getDate = () => new Date()
    const identify = userID + getDate().toLocaleDateString();
    conversationLog.findOneAndUpdate({
        identify: identify
    }, {
        $set: {
            identify: identify,
            userID: userID,
        },
        $push: { historic: sentence }
    }, {
        upsert: true, new: true, setDefaultsOnInsert: true
    }, (err, doc) => {
        if (err) {
            console.error(err);
        } else {
        }
    });
}

module.exports = {
    logFallback,
    logConversation
}