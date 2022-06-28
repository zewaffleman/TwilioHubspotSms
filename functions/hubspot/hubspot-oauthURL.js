exports.handler = function (context, event, callback) {

    const response = new Twilio.Response()

    //match redirect URL to the one defined in Hubspot
    var redirect_uri = 'http://localhost:4000/hubspot/hubspot-oauth'

    const authUrl =
        'https://app.hubspot.com/oauth/authorize' +
        '?client_id=' + context.HUBSPOT_CLIENT_ID +
        '&scope=crm.objects.contacts.read%20crm.objects.contacts.write%20crm.objects.companies.write%20crm.objects.companies.read' +
        '&redirect_uri=' + redirect_uri;

    response.appendHeader("location", authUrl)
    response.setStatusCode(301)
    response.setBody({message: "some thing"})

    callback(null, response);
};
