//Node API methods:
//https://github.com/MadKudu/node-hubspot
//https://github.com/HubSpot/hubspot-api-nodejs

const axios = require('axios')
const { request } = require('http');
const Hubspot = require('@hubspot/api-client')

exports.handler = async function (context, event, callback) {
    const response = new Twilio.Response();
    const hubspotClient = new Hubspot.Client({ accessToken: event.code, developerApiKey: context.HUBSPOT_API_KEY });
    //console.log(hubspotClient)

    const fetch = {
        "objectTypes": [
            {
                "name": "contacts",
                "propertiesToSend": [
                    "phone",
                    "mobilephone",
                    "lastname",
                    "firstname"
                ]
            }
        ],
        "targetUrl": "https://www.example.com/hubspot/target"
        //"targetUrl": ""
    };
    /*
    const display = {
        "properties": {
            "dataType": "STRING",
            "name": "pet_name",
            "label": "Pets Name"
        }
    };
    */
    const display = {
        "dataType": "STRING",
        "name": "phone_number",
        "label": "phone number"
    };
    const actions = {
        "baseUrls": [
            "https://twiliohubspothack-8221-dev.twil.io/sms/reply"
        ]
    };

    const CardCreateRequest = { title: "Send SMS", fetch, display, actions };

    //console.log(CardCreateRequest)

    const appId = context.HUBSPOT_APP_ID;

    try {
        const apiResponse = await hubspotClient.crm.extensions.cards.cardsApi.create(appId, CardCreateRequest);
        console.log(apiResponse)
        callback(null, apiResponse);

    } catch (e) {
        console.log("woops")
        e.message === 'HTTP request failed'
            ? console.error(JSON.stringify(e.response, null, 2))
            : console.error(e)
    }

};

