# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api_manage_events.spec.ts >> MANAGE EVENTS TESTS >> Add New Event By API And View It + Book a ticket E2E
- Location: tests\api_manage_events.spec.ts:28:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Confirm Booking' })
    - locator resolved to <button type="submit" id="confirm-booking" class="↵        inline-flex items-center justify-center font-medium border↵        transition-colors duration-150↵        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2↵        disabled:opacity-50 disabled:cursor-not-allowed↵        bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white border-transparent shadow-sm↵        px-6 py-2.5 text-base rounded-lg gap-2↵        confirm-booking-btn w-full↵      ">Confirm Booking</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - link "EventHub" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e9]: EventHub
      - generic [ref=e10]:
        - link "Home" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "Events" [ref=e12] [cursor=pointer]:
          - /url: /events
        - link "My Bookings" [ref=e13] [cursor=pointer]:
          - /url: /bookings
        - link "API Docs" [ref=e14] [cursor=pointer]:
          - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - button "Admin" [ref=e16] [cursor=pointer]:
          - text: Admin
          - img [ref=e17]
        - generic [ref=e19]:
          - generic "wasee.2132254@gmail.com" [ref=e20]
          - button "Logout" [ref=e21] [cursor=pointer]
  - main [ref=e22]:
    - generic [ref=e23]:
      - navigation [ref=e24]:
        - link "Events" [ref=e25] [cursor=pointer]:
          - /url: /events
        - generic [ref=e26]: /
        - generic [ref=e27]: summisse carpo somniculosus quos
      - generic [ref=e28]:
        - generic [ref=e29]:
          - img [ref=e32]
          - generic [ref=e34]:
            - generic [ref=e36]: Sports
            - heading "summisse carpo somniculosus quos" [level=1] [ref=e37]
            - generic [ref=e38]:
              - generic [ref=e39]:
                - generic [ref=e40]: 📅
                - generic [ref=e41]:
                  - paragraph [ref=e42]: Date
                  - paragraph [ref=e43]: Saturday, 18 July
              - generic [ref=e44]:
                - generic [ref=e45]: 🕐
                - generic [ref=e46]:
                  - paragraph [ref=e47]: Time
                  - paragraph [ref=e48]: 03:37 pm
              - generic [ref=e49]:
                - generic [ref=e50]: 📍
                - generic [ref=e51]:
                  - paragraph [ref=e52]: Venue
                  - paragraph [ref=e53]: Pfannerstill Street
              - generic [ref=e54]:
                - generic [ref=e55]: 🌆
                - generic [ref=e56]:
                  - paragraph [ref=e57]: City
                  - paragraph [ref=e58]: Rochester Hills
              - generic [ref=e59]:
                - generic [ref=e60]: 🎫
                - generic [ref=e61]:
                  - paragraph [ref=e62]: Available
                  - paragraph [ref=e63]: 427 / 427 seats
              - generic [ref=e64]:
                - generic [ref=e65]: 💰
                - generic [ref=e66]:
                  - paragraph [ref=e67]: Price per ticket
                  - paragraph [ref=e68]: $400
            - generic [ref=e69]:
              - heading "About this event" [level=2] [ref=e70]
              - paragraph [ref=e71]: Chirographum summisse enim tunc crux carus cur praesentium at. Absens tandem atqui. Vinco admoveo vulariter cui.
        - generic [ref=e73]:
          - generic [ref=e74]:
            - heading "Book Tickets" [level=2] [ref=e75]
            - generic [ref=e76]: $400
          - paragraph [ref=e77]: per ticket
          - generic [ref=e78]:
            - generic [ref=e79]:
              - generic [ref=e80]: Tickets
              - generic [ref=e81]:
                - button "−" [disabled] [ref=e82]
                - generic [ref=e83]: "1"
                - button "+" [ref=e84] [cursor=pointer]
                - generic [ref=e85]: (max 10)
            - generic [ref=e86]:
              - generic [ref=e87]: Full Name*
              - textbox "Full Name*" [ref=e88]:
                - /placeholder: Your full name
                - text: waseem ashraf
            - generic [ref=e89]:
              - generic [ref=e90]: Email*
              - textbox "Email*" [ref=e91]:
                - /placeholder: you@email.com
                - text: wasee.2132254@gmail.com
            - generic [ref=e92]:
              - generic [ref=e93]: Phone Number*
              - textbox "Phone Number*" [active] [ref=e94]:
                - /placeholder: +91 98765 43210
                - text: "0598828380"
            - generic [ref=e95]:
              - generic [ref=e96]:
                - generic [ref=e97]: $400 × 1 ticket
                - generic [ref=e98]: $400
              - generic [ref=e99]:
                - generic [ref=e100]: Total
                - generic [ref=e101]: $400
            - button "Confirm Booking" [ref=e102] [cursor=pointer]
  - contentinfo [ref=e103]:
    - generic [ref=e104]:
      - generic [ref=e105]:
        - generic [ref=e106]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e107]
          - paragraph [ref=e108]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e109]:
          - heading "Popular Courses" [level=3] [ref=e110]
          - list [ref=e111]:
            - listitem [ref=e112]:
              - link "Selenium WebDriver with Java" [ref=e113] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e114]:
              - link "Playwright with JavaScript" [ref=e115] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e116]:
              - link "RestAssured API Testing" [ref=e117] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e118]:
              - link "Cypress End-to-End Testing" [ref=e119] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e120]:
              - link "Appium Mobile Testing" [ref=e121] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e122]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e123]
          - paragraph [ref=e124]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e125] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e126]:
          - heading "EventHub Practice App" [level=3] [ref=e127]
          - list [ref=e128]:
            - listitem [ref=e129]:
              - link "Browse Events" [ref=e130] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e131]:
              - link "My Bookings" [ref=e132] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e133]:
              - link "Manage Events" [ref=e134] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e135]:
              - link "API Documentation" [ref=e136] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e137]:
        - paragraph [ref=e138]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e139]:
          - link "rahulshettyacademy.com →" [ref=e140] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e141] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e142]
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class EventDetailsPage {
  4  | 
  5  |     page: Page;
  6  |     eventsCardsHeads: Locator;
  7  |     eventTitleDetails: Locator;
  8  |     bookNowBTN: Locator;
  9  |     fullNameField: Locator;
  10 |     emailField: Locator;
  11 |     phoneField: Locator;
  12 |     confirmationLabel: Locator;
  13 |     bookingRef: Locator;
  14 | 
  15 |     constructor(page: Page) {
  16 | 
  17 |         this.page = page;
  18 |         this.eventsCardsHeads = page.locator('main article h3');
  19 |         this.eventTitleDetails = page.locator('h1');
  20 |         this.bookNowBTN = page.getByRole('button', { name: 'Confirm Booking' });
  21 |         this.fullNameField = page.locator('#customerName');
  22 |         this.emailField = page.locator('#customer-email');
  23 |         this.phoneField = page.locator('#phone');
  24 |         this.confirmationLabel = page.getByText('Booking Confirmed! 🎉');
  25 |         this.bookingRef = page.locator('.booking-ref');
  26 | 
  27 |     }
  28 | 
  29 |     async goToEventDetails(eventTitle: string) {
  30 |         const targetLink = this.eventsCardsHeads.filter({ hasText: eventTitle });
  31 |         await targetLink.click();
  32 |     }
  33 | 
  34 |     async bookTicket(user_full_name: string, user_email: string, user_phone: string) {
  35 |         await this.fullNameField.fill(user_full_name);
  36 |         await this.emailField.fill(user_email);
  37 |         await this.phoneField.fill(user_phone);
> 38 |         await this.bookNowBTN.click();
     |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  39 |         await this.page.waitForLoadState('networkidle');
  40 |     }
  41 | 
  42 |     async getBookingReference(): Promise<string> {
  43 |         return await this.bookingRef.innerText();
  44 |     }
  45 | 
  46 |     async hasBookingReference(): Promise<boolean> {
  47 |         return await this.bookingRef.isVisible();
  48 |     }
  49 | 
  50 | }
```