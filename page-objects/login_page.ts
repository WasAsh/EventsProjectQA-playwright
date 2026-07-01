import {Page , Locator} from '@playwright/test';


export class LoginPage{

    page : Page ;
    userNameField : Locator ;
    passwordField : Locator ;
    logInBTN : Locator ;
    invalidBanner : Locator ;
    errorTextEmptyField : Locator;
    logOutBTN : Locator ;

    constructor(page : Page){
        this.page = page ;
        this.userNameField = page.locator('#email');
        this.passwordField = page.locator('#password');
        this.logInBTN = page.locator('button#login-btn');
        this.invalidBanner = page.locator('text=Invalid email or password');
        this.errorTextEmptyField = page.locator(".text-red-600");
        this.logOutBTN = page.getByRole('button', { name: 'Logout' });
    }

    async goTo(urlString : string){
        await this.page.goto(urlString);
    }

    async loginProcess(user_name : string , password : string){
        await this.userNameField.fill(user_name);
        await this.passwordField.fill(password);
        await this.logInBTN.click();
        await this.page.waitForLoadState('networkidle');
    }

}