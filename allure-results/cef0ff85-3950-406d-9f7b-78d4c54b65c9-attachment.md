# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home_book_event_details.spec.ts >> EVENT DETAILS TESTS >> Multiple Filters Combined
- Location: tests\home_book_event_details.spec.ts:123:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('main select').first()
    - locator resolved to <select class="↵          w-full px-3 py-2 rounded-lg border text-sm text-gray-900 bg-white↵          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent↵          transition-colors duration-150 appearance-none cursor-pointer↵          border-gray-300 hover:border-gray-400↵        ">…</select>

```

# Test source

```ts
  37  |       window.localStorage.setItem('eventhub_token', value);
  38  |     },
  39  |       token
  40  |     );
  41  |     const poManager = new PageObjectManager(page);
  42  |     const loginPage = poManager.getLoginPage();
  43  |     const homeEventPage = poManager.getHomeEventPage();
  44  | 
  45  |     await loginPage.goTo(`${ENV.baseURL}/events`);
  46  |     await expect(homeEventPage.searchBar).toBeVisible();
  47  |     await homeEventPage.searchBar.fill(ENV.eventTitle);
  48  |     const eventCards = homeEventPage.eventsCards;
  49  |     await expect(eventCards.first()).toContainText(ENV.eventTitle);
  50  |   });
  51  | 
  52  |   test('Search With Empty Query', async ({ page }) => {
  53  | 
  54  |     await page.addInitScript(value => {
  55  |       window.localStorage.setItem('eventhub_token', value);
  56  |     },
  57  |       token
  58  |     );
  59  |     const poManager = new PageObjectManager(page);
  60  |     const loginPage = poManager.getLoginPage();
  61  |     const homeEventPage = poManager.getHomeEventPage();
  62  | 
  63  |     await loginPage.goTo(`${ENV.baseURL}/events`);
  64  |     await expect(homeEventPage.searchBar).toBeVisible();
  65  |     await homeEventPage.searchBar.fill('');
  66  |     await page.waitForLoadState('networkidle');
  67  |     await expect(page).toHaveURL(`${ENV.baseURL}/events`);
  68  |   });
  69  | 
  70  |   test('Search With Special Characters', async ({ page }) => {
  71  | 
  72  |     await page.addInitScript(value => {
  73  |       window.localStorage.setItem('eventhub_token', value);
  74  |     },
  75  |       token
  76  |     );
  77  |     const poManager = new PageObjectManager(page);
  78  |     const loginPage = poManager.getLoginPage();
  79  |     const homeEventPage = poManager.getHomeEventPage();
  80  | 
  81  |     await loginPage.goTo(`${ENV.baseURL}/events`);
  82  |     await expect(homeEventPage.searchBar).toBeVisible();
  83  |     await homeEventPage.searchBar.fill('@#$%^&*()');
  84  |     await expect(homeEventPage.emptyPageContent).toBeVisible();
  85  |     await expect(homeEventPage.emptyPageContent).toHaveText('No events found');
  86  |   });
  87  | 
  88  |   test('Filter Events By Location', async ({ page }) => {
  89  |     await page.addInitScript(value => {
  90  |       window.localStorage.setItem('eventhub_token', value);
  91  |     },
  92  |       token
  93  |     );
  94  |     const poManager = new PageObjectManager(page);
  95  |     const loginPage = poManager.getLoginPage();
  96  |     const homeEventPage = poManager.getHomeEventPage();
  97  | 
  98  |     await loginPage.goTo(`${ENV.baseURL}/events`);
  99  |     const locationFilter = homeEventPage.filterSection.nth(1);
  100 |     await locationFilter.selectOption('Mumbai');
  101 |     await expect(homeEventPage.emptyPageContent).toHaveText('No events found');
  102 |     await locationFilter.selectOption('All Cities');
  103 |     await expect(page).toHaveURL(`${ENV.baseURL}/events`);
  104 |   });
  105 | 
  106 |   test('Filter Events By Category', async ({ page }) => {
  107 | 
  108 |     await page.addInitScript(value => {
  109 |       window.localStorage.setItem('eventhub_token', value);
  110 |     },
  111 |       token
  112 |     );
  113 |     const poManager = new PageObjectManager(page);
  114 |     const loginPage = poManager.getLoginPage();
  115 |     const homeEventPage = poManager.getHomeEventPage();
  116 | 
  117 |     await loginPage.goTo(`${ENV.baseURL}/events`);
  118 |     const categoryFilter = homeEventPage.filterSection.nth(0);
  119 |     await categoryFilter.selectOption('🎵 Concert');
  120 |     await expect(homeEventPage.eventCardCategoryBadge).toHaveText('Concert');
  121 |   });
  122 | 
  123 |   test('Multiple Filters Combined', async ({ page }) => {
  124 | 
  125 |     await page.addInitScript(value => {
  126 |       window.localStorage.setItem('eventhub_token', value);
  127 |     },
  128 |       token
  129 |     );
  130 |     const poManager = new PageObjectManager(page);
  131 |     const loginPage = poManager.getLoginPage();
  132 |     const homeEventPage = poManager.getHomeEventPage();
  133 | 
  134 |     await loginPage.goTo(`${ENV.baseURL}/events`);
  135 |     const categoryFilter = homeEventPage.filterSection.nth(0);
  136 |     const locationFilter = homeEventPage.filterSection.nth(1);
> 137 |     await categoryFilter.selectOption('🎉 Festival');
      |                          ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  138 |     await expect(homeEventPage.eventsCards.first()).toBeVisible();
  139 |     await locationFilter.selectOption('Delhi');
  140 |     await expect(page).toHaveURL(/city=Delhi/);
  141 |   });
  142 | 
  143 |   test('Clear All Filters', async ({ page }) => {
  144 | 
  145 |     await page.addInitScript(value => {
  146 |       window.localStorage.setItem('eventhub_token', value);
  147 |     },
  148 |       token
  149 |     );
  150 |     const poManager = new PageObjectManager(page);
  151 |     const loginPage = poManager.getLoginPage();
  152 |     const homeEventPage = poManager.getHomeEventPage();
  153 | 
  154 |     await loginPage.goTo(`${ENV.baseURL}/events`);
  155 |     const categoryFilter = homeEventPage.filterSection.nth(0);
  156 |     const locationFilter = homeEventPage.filterSection.nth(1);
  157 |     await categoryFilter.selectOption('🎉 Festival');
  158 |     await locationFilter.selectOption('Delhi');
  159 |     await homeEventPage.clearBTN.click();
  160 |     await expect(page).toHaveURL(`${ENV.baseURL}/events`);
  161 |     await expect(categoryFilter).toHaveValue('');
  162 |     await expect(locationFilter).toHaveValue('');
  163 |     await expect(homeEventPage.eventsCards.first()).toBeVisible();
  164 |   });
  165 | 
  166 |   test('Search And Filter Combined', async ({ page }) => {
  167 | 
  168 |     await page.addInitScript(value => {
  169 |       window.localStorage.setItem('eventhub_token', value);
  170 |     },
  171 |       token
  172 |     );
  173 |     const poManager = new PageObjectManager(page);
  174 |     const loginPage = poManager.getLoginPage();
  175 |     const homeEventPage = poManager.getHomeEventPage();
  176 | 
  177 |     await loginPage.goTo(`${ENV.baseURL}/events`);
  178 |     await homeEventPage.searchBar.fill('v');
  179 |     await expect(homeEventPage.eventsCards.first()).toBeVisible();
  180 |     await homeEventPage.filterSection.nth(0).selectOption('🎉 Festival');
  181 |     await homeEventPage.filterSection.nth(1).selectOption('Delhi');
  182 |     await expect(homeEventPage.eventsCards.first()).toBeVisible();
  183 | 
  184 |   });
  185 | 
  186 |   test('@smoke View Event Details And Book a Ticket', async ({ page }) => {
  187 |     await page.addInitScript(value => {
  188 |       window.localStorage.setItem('eventhub_token', value);
  189 |     },
  190 |       token
  191 |     );
  192 |     const poManager = new PageObjectManager(page);
  193 |     const loginPage = poManager.getLoginPage();
  194 |     const eventDetailsPage = poManager.getEventDetailsPage();
  195 |     const eventTicketsPage = poManager.getEventTicketsPage();
  196 | 
  197 |     await loginPage.goTo(`${ENV.baseURL}/events`);
  198 |     await eventDetailsPage.goToEventDetails(ENV.eventTitle);
  199 |     await expect(eventDetailsPage.eventTitleDetails).toHaveText(ENV.eventTitle);
  200 |     await eventDetailsPage.bookTicket(ENV.eventPlacedName, ENV.user.email, ENV.eventPlacedPhone);
  201 |     await expect(eventDetailsPage.confirmationLabel).toBeVisible();
  202 |     expect(await eventDetailsPage.hasBookingReference()).toBeTruthy();
  203 |     const ref = await eventDetailsPage.getBookingReference();
  204 |     console.log(ref);
  205 |     await eventTicketsPage.goToBookingAndViewTicket(ref);
  206 |     await expect(eventTicketsPage.refInViewDetails).toHaveText(ref);
  207 |   });
  208 | 
  209 |   test('Try To Add Blank Data', async ({ page }) => {
  210 |     await page.addInitScript(value => {
  211 |       window.localStorage.setItem('eventhub_token', value);
  212 |     },
  213 |       token
  214 |     );
  215 |     const poManager = new PageObjectManager(page);
  216 |     const loginPage = poManager.getLoginPage();
  217 |     const eventDetailsPage = poManager.getEventDetailsPage();
  218 |     const eventTicketsPage = poManager.getEventTicketsPage();
  219 | 
  220 |     await loginPage.goTo(`${ENV.baseURL}/events`);
  221 |     await eventDetailsPage.goToEventDetails(ENV.eventTitle);
  222 |     await expect(eventDetailsPage.eventTitleDetails).toHaveText(ENV.eventTitle);
  223 |     await eventDetailsPage.bookTicket("", "", "");
  224 |     await expect(eventTicketsPage.errorMsgs.first()).toBeVisible();
  225 |   });
  226 | });
  227 | 
```