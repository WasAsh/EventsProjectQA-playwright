# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: manage_events.spec.ts >> MANAGE EVENTS TESTS >> Add New Event (Happy Scenario)
- Location: tests\manage_events.spec.ts:17:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Admin' })
    - locator resolved to <button class="↵                  flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors↵                  text-gray-600 hover:text-gray-900 hover:bg-gray-100↵                ">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | 
  4  | export class ManageEvents {
  5  | 
  6  |     page : Page;
  7  |     adminBTN : Locator;
  8  |     manageEventsBTN : Locator;
  9  |     eventTitle : Locator;
  10 |     eventDiscription : Locator;
  11 |     eventCategory : Locator;
  12 |     eventCity : Locator;
  13 |     eventVenue : Locator;
  14 |     eventDateTime : Locator;
  15 |     eventTicketPrice : Locator;
  16 |     eventSeats : Locator;
  17 |     eventAddBTN : Locator;
  18 |     successMSG : Locator;
  19 |     textFieldErrorMSGs : Locator;
  20 |     eventsTable : Locator;
  21 |     confirmDeleteActionBTN : Locator;
  22 |     deleteEventSuccessMSG : Locator;
  23 | 
  24 |     constructor(page: Page){
  25 | 
  26 |         this.page = page;
  27 |         this.adminBTN = page.getByRole('button', { name: 'Admin' });
  28 |         this.manageEventsBTN = page.getByRole('navigation').getByRole('link', { name: 'Manage Events' });
  29 |         this.eventTitle = page.locator("#event-title-input");
  30 |         this.eventDiscription = page.getByPlaceholder("Describe the event…");
  31 |         this.eventCategory = page.locator("#category");
  32 |         this.eventCity = page.getByLabel('City');
  33 |         this.eventVenue = page.getByLabel('Venue');
  34 |         this.eventDateTime = page.getByLabel('Event Date & Time');
  35 |         this.eventTicketPrice = page.getByLabel('Price ($)');
  36 |         this.eventSeats = page.getByLabel('Total Seats');
  37 |         this.eventAddBTN = page.locator("#add-event-btn");
  38 |         this.successMSG = page.getByText('Event created!');
  39 |         this.textFieldErrorMSGs = page.locator('#admin-event-form p');
  40 |         this.eventsTable = page.locator('table #event-table-row');
  41 |         this.confirmDeleteActionBTN = page.locator('#confirm-dialog-yes');
  42 |         this.deleteEventSuccessMSG = page.getByText('Event deleted');
  43 |     }
  44 | 
  45 |     getFutureDateTime = (days = 1) => {
  46 |     const d = new Date();
  47 |     d.setDate(d.getDate() + days);
  48 |     return d.toISOString().slice(0, 16);
  49 |     };
  50 | 
  51 |     async addNewEvent(title: string , discription: string , option: string , city: string , venue: string , price: number , seats: number): Promise<any>{
> 52 |         await this.adminBTN.click();
     |                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  53 |         await this.manageEventsBTN.click();
  54 |         await this.eventTitle.fill(title);
  55 |         await this.eventDiscription.fill(discription);
  56 |         await this.eventCategory.selectOption({value: option});
  57 |         await this.eventCity.fill(city);
  58 |         await this.eventVenue.fill(venue);
  59 |         await this.eventDateTime.fill(this.getFutureDateTime(7));
  60 |         await this.eventTicketPrice.fill(price.toString());
  61 |         await this.eventSeats.fill(seats.toString());
  62 |         await this.eventAddBTN.click();
  63 |         return title;
  64 |     }
  65 | 
  66 |     async deleteSpeceficEvent(title: string){
  67 |         const allEventsCount = await this.eventsTable.count();
  68 |         for(let i = 0 ; i < allEventsCount ; i++){
  69 |             const ticketTitle = await this.eventsTable.nth(i).locator('.truncate').textContent();
  70 |             if(ticketTitle === title){
  71 |                 await this.eventsTable.nth(i).locator('#delete-event-btn').click();
  72 |                 await this.confirmDeleteActionBTN.click();
  73 |                 break;
  74 |             }
  75 |         }
  76 |     }
  77 | 
  78 | }
```