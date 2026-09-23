import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";



export class LoginPage extends BasePage{

    //1. private locators
    private readonly emailid: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;
    private readonly isForgottenPwdLink : Locator;
    private readonly loginErrorMessage : Locator;
    


    //2. constructor of the page class: init the locators
    constructor(page:Page){
        super(page)
        this.emailid=page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password=page.getByLabel('Password');
        this.loginBtn=page.getByRole('button', { name: 'Login' });
        this.isForgottenPwdLink=page.getByRole('link', { name: 'Forgotten Password' });
        this.loginErrorMessage = page.locator('#account-login > div.alert.alert-danger:nth-of-type(1)')
    }


    //3. public page actions(methods) / behaviour: Encapsulation
    async goToLog():Promise<void>{
        await this.page.goto('opencart/index.php?route=account/login');

    }

    async getLoginPageTitile() : Promise<string>{
        return await this.page.title();
    }

    async isForgottenPwdLinkExist():Promise<boolean> {
        return await this.isForgottenPwdLink.isVisible();
    }

    async doLogin(username:string, password:string):Promise<void>{
        console.log(`usercred: ${username} - ${password}`);
        await this.emailid.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
    async isInvalidLoginErrorDisplayed(): Promise<boolean>{
        return await this.loginErrorMessage.isVisible();
    }
    




}

