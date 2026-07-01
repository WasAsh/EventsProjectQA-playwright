import { test, expect, request } from '@playwright/test';
import { PageObjectManager } from '../page-objects/page_object_manager';
import { ENV } from "../configs/env";
import { USERS } from '../configs/users';
import { EVENTS } from '../configs/event';
import {ApiUtils} from '../utils/api_utils';

let token: any;

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtils = new ApiUtils(apiContext);
  token = await apiUtils.loginProcess(USERS.user.email, USERS.user.password);
})

test.describe('EVENT DETAILS TESTS', () => {

  test('View Homepage After Login', async ({ page }) => {

    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();
    const homeEventPage = poManager.getHomeEventPage();

    await loginPage.goTo(ENV.baseURL);
    await loginPage.loginProcess(USERS.user.email, USERS.user.password);
    await expect(homeEventPage.eventBTN).toBeVisible();
    await expect(homeEventPage.homeText).toContainText(/Discover & Book/);
    const eventCards = homeEventPage.eventsCards;
    await expect(eventCards.first()).toContainText('Book Now');
  });

  test.only('View All Events Page', async ({ page }) => {

    await page.addInitScript(value => {
      window.localStorage.setItem('eventhub_token', value);
    },
      token
    );
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();
    const homeEventPage = poManager.getHomeEventPage();

    await loginPage.goTo(`${ENV.baseURL}/events`);
    await expect(page).toHaveURL(/\/events/);
    await expect(homeEventPage.homeText).toHaveText('Upcoming Events');
    const eventCards = homeEventPage.eventsCards;
    await expect(eventCards.first()).toBeVisible();
    await expect(eventCards.first()).toContainText('Book Now');
  });

  test('Search Events By Keyword', async ({ page }) => {

    await page.addInitScript(value => {
      window.localStorage.setItem('eventhub_token', value);
    },
      token
    );
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();
    const homeEventPage = poManager.getHomeEventPage();

    await loginPage.goTo(`${ENV.baseURL}/events`);
    await expect(homeEventPage.searchBar).toBeVisible();
    await homeEventPage.searchBar.fill('Diwali');
    await expect(page).toHaveURL(/search=Diwali/);
    const eventCards = homeEventPage.eventsCards;
    await expect(eventCards.first()).toContainText('Diwali');
  });

  test('Search With Empty Query', async ({ page }) => {

    await page.addInitScript(value => {
      window.localStorage.setItem('eventhub_token', value);
    },
      token
    );
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();
    const homeEventPage = poManager.getHomeEventPage();

    await loginPage.goTo(`${ENV.baseURL}/events`);
    await expect(homeEventPage.searchBar).toBeVisible();
    await homeEventPage.searchBar.fill('Diwali');
    await expect(page).toHaveURL(/search=Diwali/);
    await homeEventPage.searchBar.fill('');
    await expect(page).toHaveURL(`${ENV.baseURL}/events`);
  });

  test('Search With Special Characters', async ({ page }) => {

    await page.addInitScript(value => {
      window.localStorage.setItem('eventhub_token', value);
    },
      token
    );
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();
    const homeEventPage = poManager.getHomeEventPage();

    await loginPage.goTo(`${ENV.baseURL}/events`);
    await expect(homeEventPage.searchBar).toBeVisible();
    await homeEventPage.searchBar.fill('@#$%^&*()');
    await expect(page).toHaveURL(/search=/);
    await expect(homeEventPage.emptyPageContent).toBeVisible();
    await expect(homeEventPage.emptyPageContent).toHaveText('No events found');
  });

  test('Filter Events By Location', async ({ page }) => {

    await page.addInitScript(value => {
      window.localStorage.setItem('eventhub_token', value);
    },
      token
    );
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();
    const homeEventPage = poManager.getHomeEventPage();

    await loginPage.goTo(`${ENV.baseURL}/events`);
    const locationFilter = homeEventPage.filterSection.nth(1);
    await locationFilter.selectOption('Mumbai');
    await expect(homeEventPage.emptyPageContent).toHaveText('No events found');
    await locationFilter.selectOption('All Cities');
    await expect(page).toHaveURL(`${ENV.baseURL}/events`);
  });

  test('Filter Events By Category', async ({ page }) => {

    await page.addInitScript(value => {
      window.localStorage.setItem('eventhub_token', value);
    },
      token
    );
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();
    const homeEventPage = poManager.getHomeEventPage();

    await loginPage.goTo(`${ENV.baseURL}/events`);
    const categoryFilter = homeEventPage.filterSection.nth(0);
    await categoryFilter.selectOption('🎵 Concert');
    await expect(page).toHaveURL(/category=Concert/);
    await expect(homeEventPage.eventCardCategoryBadge).toHaveText('Concert');
  });

  test('Multiple Filters Combined', async ({ page }) => {

    await page.addInitScript(value => {
      window.localStorage.setItem('eventhub_token', value);
    },
      token
    );
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();
    const homeEventPage = poManager.getHomeEventPage();

    await loginPage.goTo(`${ENV.baseURL}/events`);
    const categoryFilter = homeEventPage.filterSection.nth(0);
    const locationFilter = homeEventPage.filterSection.nth(1);
    await categoryFilter.selectOption('🎉 Festival');
    await expect(page).toHaveURL(/category=Festival/);
    await locationFilter.selectOption('Delhi');
    await expect(page).toHaveURL(/city=Delhi/);
  });

  test('Clear All Filters', async ({ page }) => {

    await page.addInitScript(value => {
      window.localStorage.setItem('eventhub_token', value);
    },
      token
    );
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();
    const homeEventPage = poManager.getHomeEventPage();

    await loginPage.goTo(`${ENV.baseURL}/events`);
    const categoryFilter = homeEventPage.filterSection.nth(0);
    const locationFilter = homeEventPage.filterSection.nth(1);
    await categoryFilter.selectOption('🎉 Festival');
    await expect(page).toHaveURL(/category=Festival/);
    await locationFilter.selectOption('Delhi');
    await expect(page).toHaveURL(/city=Delhi/);
    await homeEventPage.clearBTN.click();
    await expect(page).toHaveURL(`${ENV.baseURL}/events`);
    await expect(categoryFilter).toHaveValue('');
    await expect(locationFilter).toHaveValue('');
    await expect(homeEventPage.eventsCards.first()).toBeVisible();
  });

  test('Search And Filter Combined', async ({ page }) => {

    await page.addInitScript(value => {
      window.localStorage.setItem('eventhub_token', value);
    },
      token
    );
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();
    const homeEventPage = poManager.getHomeEventPage();

    await loginPage.goTo(`${ENV.baseURL}/events`);
    await homeEventPage.searchBar.fill('v');
    await homeEventPage.searchBar.press('Enter');
    await expect(homeEventPage.eventsCards.first()).toBeVisible();
    await homeEventPage.filterSection.nth(0).selectOption('🎉 Festival');
    await expect(page).toHaveURL(/Festival/);
    await homeEventPage.filterSection.nth(1).selectOption('Delhi');
    await expect(page).toHaveURL(/Delhi/);
  });

  test('View Event Details And E2E Book a Ticket', async ({ page }) => {
    await page.addInitScript(value => {
      window.localStorage.setItem('eventhub_token', value);
    },
      token
    );
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();
    const eventDetailsPage = poManager.getEventDetailsPage();
    const eventTicketsPage = poManager.getEventTicketsPage();

    await loginPage.goTo(`${ENV.baseURL}/events`);
    await eventDetailsPage.goToEventDetails(EVENTS.eventTitle);
    await expect(eventDetailsPage.eventTitleDetails).toHaveText(EVENTS.eventTitle);
    await eventDetailsPage.bookTicket(EVENTS.eventPlacedName, USERS.user.email, EVENTS.eventPlacedPhone);
    await expect(eventDetailsPage.confirmationLabel).toBeVisible();
    expect(await eventDetailsPage.hasBookingReference()).toBeTruthy();
    const ref = await eventDetailsPage.getBookingReference();
    console.log(ref);
    await eventTicketsPage.goToBookingAndViewTicket(ref);
    await expect(eventTicketsPage.refInViewDetails).toHaveText(ref);
  });

  test('Try To Add Blank Data', async ({ page }) => {
    await page.addInitScript(value => {
      window.localStorage.setItem('eventhub_token', value);
    },
      token
    );
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();
    const eventDetailsPage = poManager.getEventDetailsPage();
    const eventTicketsPage = poManager.getEventTicketsPage();

    await loginPage.goTo(`${ENV.baseURL}/events`);
    await eventDetailsPage.goToEventDetails(EVENTS.eventTitle);
    await expect(eventDetailsPage.eventTitleDetails).toHaveText(EVENTS.eventTitle);
    await eventDetailsPage.bookTicket("", "", "");
    expect(await eventDetailsPage.hasBookingReference()).toBeFalsy();
    await expect(eventTicketsPage.errorMsgs.first()).toBeVisible();
  });
});
