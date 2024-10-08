const webhookURL = "" // MANDATORY | https://discord.com/api/webhooks/1274527854624772198/kPn7-tAiIa6hUUe-nBSKkdS-miKX0BDJ-jYVAluEA48Ll5G-cbScSfx23TjrrbZ0MD0m
const avatarURL = "" // OPTIONAL | https://th.bing.com/th/id/OIP.wzPquKuW-Rz28rEJ6LafRgHaHa?dpr=1.3&pid=ImgDetMain

// Getting the elements from the HTML page
const username = document.getElementById('username')
const usertag = document.getElementById('usertag')
const userID = document.getElementById('userID')
const reason = document.getElementById('reason')
const appeal = document.getElementById('appeal')

function sendMessage() { // After submitting the form.
    var request = new XMLHttpRequest() // Creates a new XML Http Request
    request.open("POST", webhookURL) // https://discord.com/api/webhooks/1274527854624772198/kPn7-tAiIa6hUUe-nBSKkdS-miKX0BDJ-jYVAluEA48Ll5G-cbScSfx23TjrrbZ0MD0m
    request.setRequestHeader('Content-type', 'application/json') // Sets the request Type

    var embed = { // Embed to send.
        author: { name: `${username.value}#${usertag.value}` }, // Author of the embed
        title: "New Ban Appeal!", // Title of the embed
        timestamp: new Date(), // Footer Timestamp of the embed
        color: 0xFF0000, // Color of the embed
        footer: { text: `Ban Appeals Webhook | User ID: ${(userID.value).toString()}` }, // Footer of the embed
        fields: [ // Fields of the embed
            { name: "User", value: `${username.value}#${(usertag.value).toString()}`, inline: true },
            { name: "UserID", value: `${(userID.value).toString()}`, inline: true },
            { name: "Reason for Ban", value: `${reason.value}` },
            { name: "Appeal", value: `${appeal.value}` }
        ]
    }

    var params = { // Parameters to send the request
        username: `Ban Appeals Webhook`, // Name of the webhook
        avatar_url: avatarURL, // PFP URL of the webhook
        embeds: [ embed ] // https://discord.com/api/webhooks/1274527854624772198/kPn7-tAiIa6hUUe-nBSKkdS-miKX0BDJ-jYVAluEA48Ll5G-cbScSfx23TjrrbZ0MD0m
    }

    request.send(JSON.stringify(params)) // Sends the request 
    alert('Ban Appeal Sent!') // Tells the user that the appeal has been sent.
    console.log('Ban Appeal Sent!') // https://discord.com/api/webhooks/1274527854624772198/kPn7-tAiIa6hUUe-nBSKkdS-miKX0BDJ-jYVAluEA48Ll5G-cbScSfx23TjrrbZ0MD0m}
