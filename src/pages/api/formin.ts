/* import("astro") */
import axios from 'axios';
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    console.log('Hello?')
    console.log(data);
    
    console.log(JSON.stringify(data));
    var object = {};
    data.forEach((value, key) => object[key] = value);
    var json = {"content": JSON.stringify(object)}; //JSON.stringify(object);
    console.log(json);
    const webhookURL = "https://discord.com/api/webhooks/967241010449088592/kOtdCCfpWtpkDBHwnQUzzDa6vJOhLePyDHifQzEUDSnDSgj78WmqERisGJ4Ygd16XGMp"
    //const webhookURL = "https://webhook.site/168b0c8a-2a74-40bd-9129-3b42c868c4a4"
    const options = {
      method: 'post',
      baseURL: webhookURL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: json
    };
    //let response = await axios.request(options);
    axios.request(options)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    return new Response( 
      "{'hey' : 'there'}"
    );
  };
 
  