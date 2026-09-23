
import {test, expect} from '../src/fixtures/pagefixtures';




test.beforeEach(async({page,loginPage})=>{
    
    await loginPage.goToLog();
    await loginPage.doLogin('pw123@gmail.com', 'pw123');
    
})


test('home page title test', async({loginPage, homePage})=>{
    let pageTitle = await homePage.getHomePageTitile();
    console.log('home page title:', pageTitle);
    expect(pageTitle).toBe('My Account');
})


test('Logout link exist test', async({loginPage, homePage})=>{
    expect(await homePage.isLogoutLinkExist()).toBeTruthy();
})

test('home page headers exist or not', async ({loginPage, homePage})=>{
    let allHeaders = await  homePage.getHomePageHeaders();
    console.log('home page headers', allHeaders);
    expect.soft(allHeaders).toHaveLength(4);
    expect.soft(allHeaders).toEqual([
        'My Account',
        'My Orders',
        'My Affiliate Account',
        'Newsletter'

    ])

});