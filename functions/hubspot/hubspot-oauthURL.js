//https://twiliohubspothack-8221-dev.twil.io/hubspot/hubspot-oauthURL
//https://app.hubspot.com/oauth/authorize?client_id=bb06fbc0-8b81-473f-b838-f683caaa2088&redirect_uri=https://twiliohubspothack-8221-dev.twil.io/hubspot/hubspot-oauthURL&scope=crm.objects.contacts.read%20crm.objects.contacts.write%20crm.objects.companies.write%20crm.objects.companies.read


const http = require("http")
const express = require("express");
const { response } = require("express");
const app = express()
const port = 4000

exports.handler = function (context, event, callback) {

    const response = new Twilio.Response()

    var redirect_uri = 'https://twiliohubspothack-8221-dev.twil.io/hubspot/hubspot-oauth'
    const authUrl =
        'https://app.hubspot.com/oauth/authorize' +
        '?client_id=' + context.HUBSPOT_CLIENT_ID +
        '&scope=crm.objects.contacts.read%20crm.objects.contacts.write%20crm.objects.companies.write%20crm.objects.companies.read' +
        '&redirect_uri=' + redirect_uri;

    //console.log(authUrl)

    response.appendHeader("location", authUrl)
    response.setStatusCode(301)
    response.setBody({message: "some thing"})

    /*
    app.get("/", (req, res) => {
        res.redirect(301, authUrl)
    });

    app.get('/hubspot/hubspot-oauthURL', async (req, res) => {
        if (req.query.code) {
            print(req.query.code)
        }
    })
    */



    callback(null, response);
};
