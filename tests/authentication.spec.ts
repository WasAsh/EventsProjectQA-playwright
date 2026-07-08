import { test, expect } from '@playwright/test';
import {PageObjectManager} from '../page-objects/page_object_manager';
import { ENV } from "../configs/env";




test.describe('Authentication & Login Tests', () => {
  test('Login with valid credentials', async ({ page }) => {

    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();
    const homeEventPage = poManager.getHomeEventPage();

    await loginPage.goTo(ENV.baseURL);
    await loginPage.loginProcess(ENV.user.email , ENV.user.password);
    await expect(loginPage.invalidBanner).toHaveCount(0);
    await expect(homeEventPage.homeText).toBeVisible();
  });

  test('Login with invalid credentials', async ({ page }) => {

    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.goTo(ENV.baseURL);
    await loginPage.loginProcess(ENV.fakeUser.email , ENV.fakeUser.password);
    await expect(loginPage.invalidBanner).toBeVisible();
  });

  test('Login with empty email field', async ({ page }) => {
    
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.goTo(ENV.baseURL);
    await loginPage.loginProcess('' , ENV.fakeUser.password);
    await expect(loginPage.errorTextEmptyField).toBeVisible();
  });

  test('Login with empty password field', async ({ page }) => {

    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.goTo(ENV.baseURL);
    await loginPage.loginProcess(ENV.fakeUser.email , '');
    await expect(loginPage.errorTextEmptyField).toBeVisible();
  });

  test('Logout functionality', async ({ page }) => {
    
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();

    await loginPage.goTo(ENV.baseURL);
    await loginPage.loginProcess(ENV.user.email , ENV.user.password);
    await expect(loginPage.logOutBTN).toBeVisible();
    await loginPage.logOutBTN.click();
    await expect(page).toHaveURL(/\/login/);
  });
});
