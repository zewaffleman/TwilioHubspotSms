//https://twiliohubspothack-8221-dev.twil.io/hubspot/hubspot-oauthURL
//https://app.hubspot.com/oauth/authorize?client_id=bb06fbc0-8b81-473f-b838-f683caaa2088&redirect_uri=https://twiliohubspothack-8221-dev.twil.io/hubspot/hubspot-oauthURL&scope=crm.objects.contacts.read%20crm.objects.contacts.write%20crm.objects.companies.write%20crm.objects.companies.read

const http = require("http")
const express = require("express")
const app = express()
const port = 4000

exports.handler = function (context, event, callback) {
    var redirect_uri = 'https://twiliohubspothack-8221-dev.twil.io/hubspot/hubspot-oauthURL'
    const authUrl = 
        'https://app.hubspot.com/oauth/authorize' +
        '?client_id=' + context.HUBSPOT_CLIENT_ID + 
        '&scope=crm.objects.contacts.read%20crm.objects.contacts.write%20crm.objects.companies.write%20crm.objects.companies.read' +
        '&redirect_uri=' + redirect_uri;
    
    app.get("/", (req, res) => {
        res.redirect(301, authUrl)
    });
    console.log(authUrl)
    /*
    const twiml = new Twilio.twiml.redirect_uri
    twiml.redirect_uri = authUrl
    */
    callback(null, null);
    
};
