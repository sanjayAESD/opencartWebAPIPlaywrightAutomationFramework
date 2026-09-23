
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{

    //private locators
    private readonly logoutlink: Locator;
    private readonly headers: Locator;
    private readonly searchbox: Locator;
    private readonly searchicon: Locator;


    //const of the class...init the locators:
    constructor(page:Page){
        super(page);
        this.logoutlink = page.getByRole('link', { name: 'Logout' });
        this.headers = page.getByRole('heading', {level: 2 });
        this.searchbox = page.getByRole('textbox', { name: 'Search' })
        this.searchicon = page.locator('#search button');
    }

     async getHomePageTitile() : Promise<string>{
        return await this.page.title();
    }

    async isLogoutLinkExist(): Promise<boolean>{
        return await this.logoutlink.isVisible();
    }

    async getHomePageHeaders(): Promise<string[]>{
        return await this.headers.allInnerTexts();
    }

    async doSearch(searchKey: string){
        console.log('search key:', searchKey);
        await this.searchbox.fill(searchKey);
        await this.searchicon.click();
    }

} 
