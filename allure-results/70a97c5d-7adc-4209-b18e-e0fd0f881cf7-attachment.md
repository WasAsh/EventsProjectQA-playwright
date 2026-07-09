# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home_book_event_details.spec.ts >> EVENT DETAILS TESTS >> Try To Add Blank Data
- Location: tests\home_book_event_details.spec.ts:209:7

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: locator.click: Test timeout of 50000ms exceeded.
Call log:
  - waiting for locator('main article h3').filter({ hasText: 'testest' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
      - generic [ref=e24]:
        - heading "Upcoming Events" [level=1] [ref=e25]
        - paragraph [ref=e26]: Find your next unforgettable experience
      - generic [ref=e28]:
        - textbox "Search events, venues…" [ref=e30]
        - combobox [ref=e32] [cursor=pointer]:
          - option "All Categories" [selected]
          - option "🎙 Conference"
          - option "🎵 Concert"
          - option "⚽ Sports"
          - option "🛠 Workshop"
          - option "🎉 Festival"
        - combobox [ref=e34] [cursor=pointer]:
          - option "All Cities" [selected]
          - option "Mumbai"
          - option "Bangalore"
          - option "Delhi"
          - option "Hyderabad"
          - option "Chennai"
          - option "Pune"
      - generic [ref=e35]:
        - article [ref=e36]:
          - generic [ref=e37]:
            - img "Dilli Diwali Mela" [ref=e38]
            - generic [ref=e40]: Festival
            - generic [ref=e41]: Featured
          - generic [ref=e42]:
            - link "Dilli Diwali Mela" [ref=e43] [cursor=pointer]:
              - /url: /events/3
              - heading "Dilli Diwali Mela" [level=3] [ref=e44]
            - generic [ref=e45]:
              - generic [ref=e46]:
                - img [ref=e47]
                - generic [ref=e49]: Tue, 20 Oct
              - generic [ref=e50]:
                - img [ref=e51]
                - generic [ref=e53]: Pragati Maidan Exhibition Grounds, Delhi
            - generic [ref=e54]:
              - generic [ref=e55]:
                - paragraph [ref=e56]: $300
                - generic [ref=e57]: 8 seats left!
              - link "Book Now" [ref=e58] [cursor=pointer]:
                - /url: /events/3
        - article [ref=e59]:
          - generic [ref=e60]:
            - img "Hollywood Monsoon Night — Los Angeles" [ref=e61]
            - generic [ref=e63]: Concert
            - generic [ref=e64]: Featured
          - generic [ref=e65]:
            - link "Hollywood Monsoon Night — Los Angeles" [ref=e66] [cursor=pointer]:
              - /url: /events/2
              - heading "Hollywood Monsoon Night — Los Angeles" [level=3] [ref=e67]
            - generic [ref=e68]:
              - generic [ref=e69]:
                - img [ref=e70]
                - generic [ref=e72]: Sat, 11 Jul
              - generic [ref=e73]:
                - img [ref=e74]
                - generic [ref=e76]: Dome, NSCI SVP Stadium, Worli, Los Angeles
            - generic [ref=e77]:
              - generic [ref=e78]:
                - paragraph [ref=e79]: $2,500
                - generic [ref=e80]: 6 seats left!
              - link "Book Now" [ref=e81] [cursor=pointer]:
                - /url: /events/2
        - article [ref=e82]:
          - generic [ref=e83]:
            - img "World Tech Summit" [ref=e84]
            - generic [ref=e86]: Conference
            - generic [ref=e87]: Featured
          - generic [ref=e88]:
            - link "World Tech Summit" [ref=e89] [cursor=pointer]:
              - /url: /events/1
              - heading "World Tech Summit" [level=3] [ref=e90]
            - generic [ref=e91]:
              - generic [ref=e92]:
                - img [ref=e93]
                - generic [ref=e95]: Sat, 18 Apr
              - generic [ref=e96]:
                - img [ref=e97]
                - generic [ref=e99]: Hyderabad, Hitech city, Hyderabad
            - generic [ref=e100]:
              - generic [ref=e101]:
                - paragraph [ref=e102]: $1,500
                - generic [ref=e103]: 8 seats left!
              - link "Book Now" [ref=e104] [cursor=pointer]:
                - /url: /events/1
        - article [ref=e105]:
          - generic [ref=e106]:
            - img [ref=e108]
            - generic [ref=e111]: Sports
          - generic [ref=e112]:
            - link "vulariter cubitum clementia coma" [ref=e113] [cursor=pointer]:
              - /url: /events/73278
              - heading "vulariter cubitum clementia coma" [level=3] [ref=e114]
            - generic [ref=e115]:
              - generic [ref=e116]:
                - img [ref=e117]
                - generic [ref=e119]: Sat, 8 Aug
              - generic [ref=e120]:
                - img [ref=e121]
                - generic [ref=e123]: Van Path, Lake Ashtonville
            - generic [ref=e124]:
              - generic [ref=e125]:
                - paragraph [ref=e126]: $235
                - generic [ref=e127]: 108 seats available
              - link "Book Now" [ref=e128] [cursor=pointer]:
                - /url: /events/73278
        - article [ref=e129]:
          - generic [ref=e130]:
            - img [ref=e132]
            - generic [ref=e135]: Conference
          - generic [ref=e136]:
            - link "WASSSSSSSS" [ref=e137] [cursor=pointer]:
              - /url: /events/73271
              - heading "WASSSSSSSS" [level=3] [ref=e138]
            - generic [ref=e139]:
              - generic [ref=e140]:
                - img [ref=e141]
                - generic [ref=e143]: Fri, 7 Aug
              - generic [ref=e144]:
                - img [ref=e145]
                - generic [ref=e147]: testest, gaza
            - generic [ref=e148]:
              - generic [ref=e149]:
                - paragraph [ref=e150]: $1,111
                - generic [ref=e151]: 500 seats available
              - link "Book Now" [ref=e152] [cursor=pointer]:
                - /url: /events/73271
      - link "Add New Event" [ref=e154] [cursor=pointer]:
        - /url: /admin/events
        - button "Add New Event" [ref=e155]:
          - img [ref=e156]
          - text: Add New Event
  - contentinfo [ref=e158]:
    - generic [ref=e159]:
      - generic [ref=e160]:
        - generic [ref=e161]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e162]
          - paragraph [ref=e163]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e164]:
          - heading "Popular Courses" [level=3] [ref=e165]
          - list [ref=e166]:
            - listitem [ref=e167]:
              - link "Selenium WebDriver with Java" [ref=e168] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e169]:
              - link "Playwright with JavaScript" [ref=e170] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e171]:
              - link "RestAssured API Testing" [ref=e172] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e173]:
              - link "Cypress End-to-End Testing" [ref=e174] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e175]:
              - link "Appium Mobile Testing" [ref=e176] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e177]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e178]
          - paragraph [ref=e179]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e180] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e181]:
          - heading "EventHub Practice App" [level=3] [ref=e182]
          - list [ref=e183]:
            - listitem [ref=e184]:
              - link "Browse Events" [ref=e185] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e186]:
              - link "My Bookings" [ref=e187] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e188]:
              - link "Manage Events" [ref=e189] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e190]:
              - link "API Documentation" [ref=e191] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e192]:
        - paragraph [ref=e193]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e194]:
          - link "rahulshettyacademy.com →" [ref=e195] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e196] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e197]
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
> 31 |         await targetLink.click();
     |                          ^ Error: locator.click: Test timeout of 50000ms exceeded.
  32 |     }
  33 | 
  34 |     async bookTicket(user_full_name: string, user_email: string, user_phone: string) {
  35 |         await this.fullNameField.fill(user_full_name);
  36 |         await this.emailField.fill(user_email);
  37 |         await this.phoneField.fill(user_phone);
  38 |         await this.bookNowBTN.click();
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