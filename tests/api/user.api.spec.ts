

import {test, expect} from '../../src/fixtures/apifixtures';

const TOKEN = process.env.API_TOKEN;

let AUTH_HEADER = {
    Authorization: `Bearer ${TOKEN}`
}

test.describe.serial('running e2e go rest crud apis tests',()=>{


    test(`GET API - get all users`, async({apiHelper})=>{
        let response = await apiHelper.get('/public/v2/users', AUTH_HEADER);
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    })

})