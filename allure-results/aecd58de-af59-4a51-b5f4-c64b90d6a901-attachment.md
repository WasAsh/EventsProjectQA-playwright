# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: manage_events.spec.ts >> MANAGE EVENTS TESTS >> Add New Event And Delete It
- Location: tests\manage_events.spec.ts:57:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Event deleted')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for getByText('Event deleted')

```

```yaml
- navigation:
  - link "EventHub":
    - /url: /
    - img
    - text: EventHub
  - link "Home":
    - /url: /
  - link "Events":
    - /url: /events
  - link "My Bookings":
    - /url: /bookings
  - link "API Docs":
    - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
  - button "Admin":
    - text: Admin
    - img
  - text: wasee.2132254@gmail.com
  - button "Logout"
- main:
  - heading "+ New Event" [level=2]
  - img
  - text: You can add up to
  - strong: 6 events
  - text: . Once the limit is reached, your oldest event is automatically replaced when you add a new one. Title*
  - textbox "Title*":
    - /placeholder: Event title
  - text: Description
  - textbox "Describe the event…"
  - text: Category*
  - combobox "Category*":
    - option "Conference" [selected]
    - option "Concert"
    - option "Sports"
    - option "Workshop"
    - option "Festival"
  - text: City*
  - textbox "City*":
    - /placeholder: e.g. Bangalore
  - text: Venue*
  - textbox "Venue*":
    - /placeholder: Venue name & address
  - text: Event Date & Time*
  - textbox "Event Date & Time*"
  - text: Price ($)*
  - spinbutton "Price ($)*"
  - text: Total Seats*
  - spinbutton "Total Seats*"
  - text: Image URL (optional)
  - textbox "Image URL (optional)":
    - /placeholder: https://…
  - button "+ Add Event"
  - heading "All Events" [level=2]
  - text: 9 total
  - table:
    - rowgroup:
      - row "Title Category City Date Price Seats Actions":
        - columnheader "Title"
        - columnheader "Category"
        - columnheader "City"
        - columnheader "Date"
        - columnheader "Price"
        - columnheader "Seats"
        - columnheader "Actions"
    - rowgroup:
      - row "Dilli Diwali Mela Featured Festival Delhi 20 Oct 2026 $300 8/10000 Read-only":
        - cell "Dilli Diwali Mela Featured"
        - cell "Festival"
        - cell "Delhi"
        - cell "20 Oct 2026"
        - cell "$300"
        - cell "8/10000"
        - cell "Read-only"
      - row "Hollywood Monsoon Night — Los Angeles Featured Concert Los Angeles 11 Jul 2026 $2,500 6/3000 Read-only":
        - cell "Hollywood Monsoon Night — Los Angeles Featured"
        - cell "Concert"
        - cell "Los Angeles"
        - cell "11 Jul 2026"
        - cell "$2,500"
        - cell "6/3000"
        - cell "Read-only"
      - row "World Tech Summit Featured Conference Hyderabad 18 Apr 2026 $1,500 8/500 Read-only":
        - cell "World Tech Summit Featured"
        - cell "Conference"
        - cell "Hyderabad"
        - cell "18 Apr 2026"
        - cell "$1,500"
        - cell "8/500"
        - cell "Read-only"
      - row "Test Event 1783598874446 Sports Rafah 16 Jul 2026 $556 122/122 Edit Delete":
        - cell "Test Event 1783598874446"
        - cell "Sports"
        - cell "Rafah"
        - cell "16 Jul 2026"
        - cell "$556"
        - cell "122/122"
        - cell "Edit Delete":
          - button "Edit"
          - button "Delete"
      - row "summisse carpo somniculosus quos Sports Rochester Hills 18 Jul 2026 $400 427/427 Edit Delete":
        - cell "summisse carpo somniculosus quos"
        - cell "Sports"
        - cell "Rochester Hills"
        - cell "18 Jul 2026"
        - cell "$400"
        - cell "427/427"
        - cell "Edit Delete":
          - button "Edit"
          - button "Delete"
      - row "amor cribro clementia volutabrum Sports Lake Janae 25 Jul 2026 $487 168/169 Edit Delete":
        - cell "amor cribro clementia volutabrum"
        - cell "Sports"
        - cell "Lake Janae"
        - cell "25 Jul 2026"
        - cell "$487"
        - cell "168/169"
        - cell "Edit Delete":
          - button "Edit"
          - button "Delete"
      - row "WASSSSSSSS Conference gaza 7 Aug 2026 $1,111 500/500 Edit Delete":
        - cell "WASSSSSSSS"
        - cell "Conference"
        - cell "gaza"
        - cell "7 Aug 2026"
        - cell "$1,111"
        - cell "500/500"
        - cell "Edit Delete":
          - button "Edit"
          - button "Delete"
      - row "Test Event 1783598157203 Sports Rafah 16 Jul 2026 $556 122/122 Edit Delete":
        - cell "Test Event 1783598157203"
        - cell "Sports"
        - cell "Rafah"
        - cell "16 Jul 2026"
        - cell "$556"
        - cell "122/122"
        - cell "Edit Delete":
          - button "Edit"
          - button "Delete"
      - row "Test Event 1783598107822 Sports Rafah 16 Jul 2026 $556 122/122 Edit Delete":
        - cell "Test Event 1783598107822"
        - cell "Sports"
        - cell "Rafah"
        - cell "16 Jul 2026"
        - cell "$556"
        - cell "122/122"
        - cell "Edit Delete":
          - button "Edit"
          - button "Delete"
- contentinfo:
  - heading "Rahul Shetty Academy" [level=3]
  - paragraph: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
  - heading "Popular Courses" [level=3]
  - list:
    - listitem:
      - link "Selenium WebDriver with Java":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "Playwright with JavaScript":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "RestAssured API Testing":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "Cypress End-to-End Testing":
        - /url: https://rahulshettyacademy.com
    - listitem:
      - link "Appium Mobile Testing":
        - /url: https://rahulshettyacademy.com
  - heading "QA Job Hiring Platform" [level=3]
  - paragraph: Get hired faster — take skill assessments trusted by top QA employers worldwide.
  - link "techsmarthire.com →":
    - /url: https://techsmarthire.com
  - heading "EventHub Practice App" [level=3]
  - list:
    - listitem:
      - link "Browse Events":
        - /url: /events
    - listitem:
      - link "My Bookings":
        - /url: /bookings
    - listitem:
      - link "Manage Events":
        - /url: /admin/events
    - listitem:
      - link "API Documentation":
        - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
  - paragraph: © 2026 Rahul Shetty Academy. All rights reserved.
  - link "rahulshettyacademy.com →":
    - /url: https://rahulshettyacademy.com
  - link "techsmarthire.com →":
    - /url: https://techsmarthire.com
- alert
```

# Test source

```ts
  1  | import { test, expect, request } from '@playwright/test';
  2  | import { PageObjectManager } from '../page-objects/page_object_manager';
  3  | import { ENV } from "../configs/env";
  4  | import { ApiUtils } from '../utils/api_utils'
  5  | const dataSet = JSON.parse(JSON.stringify(require('../utils/test_data.json')));
  6  | 
  7  | let token: any;
  8  | const title = `Test Event ${Date.now()}`;
  9  | 
  10 | test.beforeAll(async () => {
  11 |   const apiContext = await request.newContext();
  12 |   const apiUtils = new ApiUtils(apiContext);
  13 |   token = await apiUtils.loginProcess(ENV.user.email, ENV.user.password);
  14 | })
  15 | 
  16 | test.describe('MANAGE EVENTS TESTS', () => {
  17 |     test('Add New Event (Happy Scenario)', async ({ page }) => {
  18 | 
  19 |         await page.addInitScript(value => {
  20 |             window.localStorage.setItem('eventhub_token', value);
  21 |         },
  22 |             token
  23 |         );
  24 | 
  25 |         const poManager = new PageObjectManager(page);
  26 |         const loginPage = poManager.getLoginPage();
  27 |         const manageEvents = poManager.getManageEventsPage();
  28 |         const homeEvent = poManager.getHomeEventPage();
  29 |         const eventDetails = poManager.getEventDetailsPage();
  30 | 
  31 |         await loginPage.goTo(ENV.baseURL);
  32 |         const newTicketTitle = await manageEvents.addNewEvent(title , dataSet.event_discription , dataSet.event_category , dataSet.event_city , dataSet.event_venue , dataSet.event_price , dataSet.event_seats);
  33 |         console.log(newTicketTitle);
  34 |         await expect(manageEvents.successMSG).toBeVisible();
  35 |         await homeEvent.eventBTN.click();
  36 |         await eventDetails.goToEventDetails(newTicketTitle);
  37 |         await expect(eventDetails.eventTitleDetails).toHaveText(newTicketTitle);    
  38 |     });
  39 | 
  40 |     test('Add New Event (Bad Scenario)', async ({ page }) => {
  41 | 
  42 |         await page.addInitScript(value => {
  43 |             window.localStorage.setItem('eventhub_token', value);
  44 |         },
  45 |             token
  46 |         );
  47 | 
  48 |         const poManager = new PageObjectManager(page);
  49 |         const loginPage = poManager.getLoginPage();
  50 |         const manageEvents = poManager.getManageEventsPage();
  51 | 
  52 |         await loginPage.goTo(ENV.baseURL);
  53 |         await manageEvents.addNewEvent('' , dataSet.event_discription , dataSet.event_category , '' , '' , 455 , dataSet.event_seats);
  54 |         await expect(manageEvents.textFieldErrorMSGs.first()).toBeVisible();    
  55 |     });
  56 | 
  57 |     test('Add New Event And Delete It', async ({ page }) => {
  58 | 
  59 |         await page.addInitScript(value => {
  60 |             window.localStorage.setItem('eventhub_token', value);
  61 |         },
  62 |             token
  63 |         );
  64 | 
  65 |         const poManager = new PageObjectManager(page);
  66 |         const loginPage = poManager.getLoginPage();
  67 |         const manageEvents = poManager.getManageEventsPage();
  68 | 
  69 |         await loginPage.goTo(ENV.baseURL);
  70 |         const newTicketTitle = await manageEvents.addNewEvent(title , dataSet.event_discription , dataSet.event_category , dataSet.event_city , dataSet.event_venue , dataSet.event_price , dataSet.event_seats);
  71 |         console.log(newTicketTitle);
  72 |         await expect(manageEvents.successMSG).toBeVisible();
  73 |         await manageEvents.deleteSpeceficEvent(newTicketTitle);
> 74 |         await expect(manageEvents.deleteEventSuccessMSG).toBeVisible();
     |                                                          ^ Error: expect(locator).toBeVisible() failed
  75 |         await page.pause();   
  76 |     });
  77 | });
```