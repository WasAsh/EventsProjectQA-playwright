import { test, expect, request } from '@playwright/test';
import { PageObjectManager } from '../page-objects/page_object_manager';
import { ENV } from "../configs/env";
import { ApiUtils } from '../utils/api_utils';
import {EventDataFactory} from '../utils/event_data_factory';


let token: any;
let eventID: any;
let allEvents: any;
const futureDate = new Date();
futureDate.setHours(futureDate.getHours() + 5);

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext);
    token = await apiUtils.loginProcess(ENV.user.email, ENV.user.password);
    const eventCreatedData = EventDataFactory.create();
    eventID = await apiUtils.createNewEvent(eventCreatedData, token);
    console.log(eventID);
    allEvents = await apiUtils.getAllEvents(token);
    console.log(allEvents);

})


test.describe('MANAGE EVENTS TESTS', () => {
    test('Add New Event By API And View It + Book a ticket E2E', async ({ page }) => {

        await page.addInitScript(value => {
            window.localStorage.setItem('eventhub_token', value);
        },
            token
        );

        const poManager = new PageObjectManager(page);
        const loginPage = poManager.getLoginPage();
        const eventDetails = poManager.getEventDetailsPage();

        await loginPage.goTo(`${ENV.baseURL}/events/${eventID}`);
        await eventDetails.bookTicket(ENV.eventPlacedName, ENV.user.email , ENV.eventPlacedPhone);
        await page.waitForLoadState('networkidle');
        // expect(await eventDetails.hasBookingReference()).toBeTruthy();
        const ref = await eventDetails.getBookingReference();
        console.log(ref);
    });
});
