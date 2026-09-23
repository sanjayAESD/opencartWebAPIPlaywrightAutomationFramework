
import {test, expect} from '../src/fixtures/pagefixtures';
import { SearchResultsPage } from '../src/pages/SearchResultsPage';

test.beforeEach(async({page,loginPage})=>{
    
    await loginPage.goToLog();
    await loginPage.doLogin(process.env.myUsername, process.env.myPassword);
    
})


test('verfiy search', async({homePage,searchResultsPage})=>{
    await homePage.doSearch('macbook');
    let resultCount = await searchResultsPage.getProductSearchResults();
    console.log('Search Results Count',resultCount);
    expect(resultCount).toBe(3);
})  

test('user is able to land on the product page', async({homePage,searchResultsPage,page})=>{
    await homePage.doSearch('macbook');
    await searchResultsPage.selectProduct('MacBook Pro');
    expect (await page.title()).toBe('MacBook Pro');

})


