import { test, expect } from '@playwright/test';
import {PageObjectManager} from '../page-objects/page_object_manager';
import { ENV } from "../configs/env";
import { USERS } from '../configs/users';




test.describe('Authentication & Login Tests', () => {
  test('Login with valid credentials', async ({ page }) => {

    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();
    const homeEventPage = poManager.getHomeEventPage();

    await loginPage.goTo(ENV.baseURL);
    await loginPage.loginProcess(USERS.user.email , USERS.user.password);
    await expect(loginPage.invalidBanner).toHaveCount(0);
    await expect(homeEventPage.homeText).toBeVisible();
  });

  test('Login with invalid credentials', async ({ page }) => {

    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.goTo(ENV.baseURL);
    await loginPage.loginProcess(USERS.fakeUser.email , USERS.fakeUser.password);
    await expect(loginPage.invalidBanner).toBeVisible();
  });

  test('Login with empty email field', async ({ page }) => {
    
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.goTo(ENV.baseURL);
    await loginPage.loginProcess('' , USERS.fakeUser.password);
    await expect(loginPage.errorTextEmptyField).toBeVisible();
  });

  test('Login with empty password field', async ({ page }) => {

    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.goTo(ENV.baseURL);
    await loginPage.loginProcess(USERS.fakeUser.email , '');
    await expect(loginPage.errorTextEmptyField).toBeVisible();
  });

  test('Logout functionality', async ({ page }) => {
    
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.goTo(ENV.baseURL);
    await loginPage.loginProcess(USERS.user.email , USERS.user.password);
    await expect(loginPage.logOutBTN).toBeVisible();
    await loginPage.logOutBTN.click();
    await expect(page).toHaveURL(/\/login/);
  });
});
