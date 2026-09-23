
import{CsvHelper} from '../src/utils/CsvHelper.ts';
import {test, expect} from '../src/fixtures/pagefixtures';



test.beforeEach(async({ loginPage })=>{
   
    await loginPage.goToLog();
   
})


test('login title test',async({loginPage})=>{

    let pageTitle = await loginPage.getLoginPageTitile();
    console.log('page title is', pageTitle);
    expect(pageTitle).toBe('Account Login');

})


test('forgot pwd link exist',async({loginPage, homePage})=>{
   
    expect(await loginPage.isForgottenPwdLinkExist).toBeTruthy();
})

test('user is able to login to app', async({loginPage, homePage})=>{
    loginPage.doLogin(process.env.myUsername, process.env.myPassword);
    expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
    expect.soft(await homePage.getHomePageTitile()).toBe('My Account');
})

let testData = CsvHelper.readCsv('src/testdata/data.csv')
for(let row of testData){
    test(`user is able to login with invalid credentials - ${row.username} - ${row.password}`, async({loginPage, homePage})=>{
        loginPage.doLogin(row.username, row.password);
        expect.soft(await loginPage.isInvalidLoginErrorDisplayed()).toBeFalsy();
   
    });
};
















