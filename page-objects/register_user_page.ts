import {Locator, Page} from '@playwright/test';


export class RegisterUser{

    page : Page;
    textLabel : Locator;
    emailSection : Locator;
    passSection : Locator;
    repeatPassSection : Locator;
    registerBTN : Locator;
    errorsMSG : Locator;

    constructor(page: Page){
        this.page = page ;
        this.textLabel = page.locator('.text-xl');
        this.emailSection = page.locator('#register-email');
        this.passSection = page.locator('#register-password');
        this.repeatPassSection = page.getByPlaceholder('Repeat your password');
        this.registerBTN = page.locator('#register-btn');
        this.errorsMSG = page.locator('.text-red-600');
    }

    async addNewUser(email: string , password: string){
        await this.emailSection.fill(email);
        await this.passSection.fill(password);
        await this.repeatPassSection.fill(password);
        await this.registerBTN.click();
    }


}