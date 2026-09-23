

import {test, expect} from '../src/fixtures/pagefixtures';



test.beforeEach(async({ loginPage })=>{
   
    await loginPage.goToLog();
    await loginPage.doLogin(process.env.myUsername, process.env.myPassword);
   
});


test('verify product header', async({homePage,searchResultsPage,productInfoPage})=>{

    await homePage.doSearch('macbook');
    await searchResultsPage.selectProduct('MacBook Pro');
    let productheader = await productInfoPage.getProductHeader();
    expect(productheader).toBe('MacBook Pro');
});


test('verify product images count', async({homePage,searchResultsPage,productInfoPage})=>{
    await homePage.doSearch('macbook');
    await searchResultsPage.selectProduct('MacBook Pro');
    let productcount = await productInfoPage.getProductImagesCount();
    expect(productcount).toBe(4);

})

test('verify product information/data', async({homePage,searchResultsPage,productInfoPage})=>{
    await homePage.doSearch('macbook');
    await searchResultsPage.selectProduct('MacBook Pro');
    let actualProductInfoMap = await productInfoPage.getProductInfo();
    console.log('Actual Product Details:', actualProductInfoMap);

    expect.soft(actualProductInfoMap.get('productheader')).toBe('MacBook Pro');
    expect.soft(actualProductInfoMap.get('productImagesCount')).toBe('MacBook Pro');
    expect.soft(actualProductInfoMap.get('Brand')).toBe('Apple');
    




})


