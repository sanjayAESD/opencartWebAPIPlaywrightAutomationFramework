

import {test, expect} from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { HomePage } from '../src/pages/HomePage';

let loginPage:LoginPage;
let homePage:HomePage;


test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.goToLog();
    homePage = new HomePage(page);
})

test('login title test',async({page})=>{

    let pageTitle = await loginPage.getLoginPageTitile();
    console.log('page title is', pageTitle);
    page.pause();
    expect(pageTitle).toBe('Account Login');

})


test('forgot pwd link exist',async({page})=>{
   
    expect(await loginPage.isForgottenPwdLinkExist).toBeTruthy();
    expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();

})

test('user is able to login to app', async()=>{
    loginPage.doLogin('pw123@gmail.com','pw123');
    expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
    expect.soft(await homePage.getHomePageTitile()).toBe('My Account');
})






