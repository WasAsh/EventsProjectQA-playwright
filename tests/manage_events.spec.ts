import { test, expect, request } from '@playwright/test';
import { PageObjectManager } from '../page-objects/page_object_manager';
import { ENV } from "../configs/env";
import { ApiUtils } from '../utils/api_utils'
const dataSet = JSON.parse(JSON.stringify(require('../utils/test_data.json')));

let token: any;
const title = `Test Event ${Date.now()}`;

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtils = new ApiUtils(apiContext);
  token = await apiUtils.loginProcess(ENV.user.email, ENV.user.password);
})

test.describe('MANAGE EVENTS TESTS', () => {
    test('Add New Event (Happy Scenario)', async ({ page }) => {

        await page.addInitScript(value => {
            window.localStorage.setItem('eventhub_token', value);
        },
            token
        );

        const poManager = new PageObjectManager(page);
        const loginPage = poManager.getLoginPage();
        const manageEvents = poManager.getManageEventsPage();
        const homeEvent = poManager.getHomeEventPage();
        const eventDetails = poManager.getEventDetailsPage();

        await loginPage.goTo(ENV.baseURL);
        const newTicketTitle = await manageEvents.addNewEvent(title , dataSet.event_discription , dataSet.event_category , dataSet.event_city , dataSet.event_venue , dataSet.event_price , dataSet.event_seats);
        console.log(newTicketTitle);
        await expect(manageEvents.successMSG).toBeVisible();
        await homeEvent.eventBTN.click();
        await eventDetails.goToEventDetails(newTicketTitle);
        await expect(eventDetails.eventTitleDetails).toHaveText(newTicketTitle);    
    });

    test('Add New Event (Bad Scenario)', async ({ page }) => {

        await page.addInitScript(value => {
            window.localStorage.setItem('eventhub_token', value);
        },
            token
        );

        const poManager = new PageObjectManager(page);
        const loginPage = poManager.getLoginPage();
        const manageEvents = poManager.getManageEventsPage();

        await loginPage.goTo(ENV.baseURL);
        await manageEvents.addNewEvent('' , dataSet.event_discription , dataSet.event_category , '' , '' , 455 , dataSet.event_seats);
        await expect(manageEvents.textFieldErrorMSGs.first()).toBeVisible();    
    });

    test('Add New Event And Delete It', async ({ page }) => {

        await page.addInitScript(value => {
            window.localStorage.setItem('eventhub_token', value);
        },
            token
        );

        const poManager = new PageObjectManager(page);
        const loginPage = poManager.getLoginPage();
        const manageEvents = poManager.getManageEventsPage();

        await loginPage.goTo(ENV.baseURL);
        const newTicketTitle = await manageEvents.addNewEvent(title , dataSet.event_discription , dataSet.event_category , dataSet.event_city , dataSet.event_venue , dataSet.event_price , dataSet.event_seats);
        console.log(newTicketTitle);
        await expect(manageEvents.successMSG).toBeVisible();
        await manageEvents.deleteSpeceficEvent(newTicketTitle);
        await expect(manageEvents.deleteEventSuccessMSG).toBeVisible();
    });
});