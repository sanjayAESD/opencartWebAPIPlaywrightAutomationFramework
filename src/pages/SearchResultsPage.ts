
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchResultsPage extends BasePage{

    //private locators
    private readonly searchResults: Locator;
    


    //const of the class...init the locators:
    constructor(page:Page){
        super(page);
        this.searchResults = page.locator('div.product-layout');
       
    };

    //page actions:
    async getProductSearchResults(): Promise<number>{
        return await this.searchResults.count();
    }

    async selectProduct(productName: string){
        console.log('product name:', productName);
        this.page.getByRole('link',{name:productName, exact:true}).first().click();
    }

}