import { test, expect } from '@playwright/test';
import {PageObjectManager} from '../page-objects/page_object_manager';
import {ENV} from '../configs/env';
import { USERS } from '../configs/users';



test.describe('User Regesteration Tests', () => {
    test('Register With Valid Data (HappyScenarion)', async ({ page }) => {

        const poManager = new PageObjectManager(page);
        const registerUserPage = poManager.getRegisterUserPage();
        await page.goto(`${ENV.baseURL}/register`);
        await expect(registerUserPage.textLabel).toBeVisible();
        await registerUserPage.addNewUser(USERS.user.email , USERS.user.password);
        await page.goto(ENV.baseURL);
        await expect(page).toHaveURL(ENV.baseURL);

      });
      test('Register With InValid Data (BadScenarion)', async ({ page }) => {

        const poManager = new PageObjectManager(page);
        const registerUserPage = poManager.getRegisterUserPage();
        await page.goto(`${ENV.baseURL}/register`);
        await expect(registerUserPage.textLabel).toBeVisible();
        await registerUserPage.addNewUser('' , USERS.user.password);
        await expect(registerUserPage.errorsMSG.first()).toBeVisible();
        
      });
});
