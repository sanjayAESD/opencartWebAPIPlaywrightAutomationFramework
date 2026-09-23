

import{test, expect} from '@playwright/test';


let AUTH_TOKEN = {
    Authorization : 'Bearer f5e2ea09a99289f56d48ea31e78ac738da93e1af96d8961ca9f705c388ad7ed9'
};

test('get the user details',async({request})=>{
    let response = await request.get('https://gorest.co.in/public/v2/users',{
         headers:AUTH_TOKEN
    });
   
    console.log(response);

    let jsonBody = await response.json();
    console.log(jsonBody);
    console.log(response.status());
    console.log(response.statusText());

});

test('create the user post api test',async({request})=>{

    let userData = {
        name: "Roopesh",
        email:`roopi_${Date.now()}@open.com`,
        gender:'male',
        status:'active'
    }

    let response = await request.post('https://gorest.co.in/public/v2/users',{
        headers: AUTH_TOKEN,
        data:userData
    });

    let jsonBody = await response.json();
    console.log(jsonBody);
    console.log(response.status());
    console.log(response.statusText()); //Created

    expect(response.status()).toBe(201);
})


test('update the user put api test',async({request})=>{

    let userData = {
        name:"Roopesh",
        email:`roopi_${Date.now()}@open.com`,
        gender:'male',
        status:'inactive'

    }

    let response = await request.put("https://gorest.co.in/public/v2/users/8626208",{
        headers:AUTH_TOKEN,
        data:userData
    });

    let jsonBody = response.json();
    console.log(jsonBody);
    console.log(response.status());
    console.log(response.statusText());


})

