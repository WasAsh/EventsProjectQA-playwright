import { test, expect, request } from '@playwright/test';
import { PageObjectManager } from '../page-objects/page_object_manager';
import { ENV } from "../configs/env";
import { ApiUtils } from '../utils/api_utils';

let token: any;

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtils = new ApiUtils(apiContext);
  token = await apiUtils.loginProcess(ENV.user.email, ENV.user.password);
})

test.describe('EVENT DETAILS TESTS', () => {

  test('@sanityView All Events Page', async ({ page }) => {

    await page.addInitScript(value => {
      window.localStorage.setItem('eventhub_token', value);
    },
      token
    );
    const poManager = new PageObjectManager(page);
    const loginPage = poManager.getLoginPage();
    const homeEventPage = poManager.getHomeEventPage();

    await loginPage.goTo(`${ENV.baseURL}/events`);
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
    await homeEventPage.searchBar.fill(ENV.eventTitle);
    const eventCards = homeEventPage.eventsCards;
    await expect(eventCards.first()).toContainText(ENV.eventTitle);
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
    await homeEventPage.searchBar.fill('');
    await page.waitForLoadState('networkidle');
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
    await expect(homeEventPage.eventsCards.first()).toBeVisible();
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
    await locationFilter.selectOption('Delhi');
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
    await expect(homeEventPage.eventsCards.first()).toBeVisible();
    await homeEventPage.filterSection.nth(0).selectOption('🎉 Festival');
    await homeEventPage.filterSection.nth(1).selectOption('Delhi');
    await expect(homeEventPage.eventsCards.first()).toBeVisible();

  });

  test('@smoke View Event Details And Book a Ticket', async ({ page }) => {
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
    await eventDetailsPage.goToEventDetails(ENV.eventTitle);
    await expect(eventDetailsPage.eventTitleDetails).toHaveText(ENV.eventTitle);
    await eventDetailsPage.bookTicket(ENV.eventPlacedName, ENV.user.email, ENV.eventPlacedPhone);
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
    await eventDetailsPage.goToEventDetails(ENV.eventTitle);
    await expect(eventDetailsPage.eventTitleDetails).toHaveText(ENV.eventTitle);
    await eventDetailsPage.bookTicket("", "", "");
    await expect(eventTicketsPage.errorMsgs.first()).toBeVisible();
  });
});
