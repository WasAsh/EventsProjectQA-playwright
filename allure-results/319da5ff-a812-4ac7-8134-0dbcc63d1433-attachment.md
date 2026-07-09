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
          - option "All Categories"
          - option "🎙 Conference"
          - option "🎵 Concert"
          - option "⚽ Sports"
          - option "🛠 Workshop"
          - option "🎉 Festival" [selected]
        - combobox [ref=e34] [cursor=pointer]:
          - option "All Cities"
          - option "Mumbai"
          - option "Bangalore"
          - option "Delhi" [selected]
          - option "Hyderabad"
          - option "Chennai"
          - option "Pune"
        - button "Clear filters" [ref=e35] [cursor=pointer]
      - article [ref=e37]:
        - generic [ref=e38]:
          - img "Dilli Diwali Mela" [ref=e39]
          - generic [ref=e41]: Festival
          - generic [ref=e42]: Featured
        - generic [ref=e43]:
          - link "Dilli Diwali Mela" [ref=e44] [cursor=pointer]:
            - /url: /events/3
            - heading "Dilli Diwali Mela" [level=3] [ref=e45]
          - generic [ref=e46]:
            - generic [ref=e47]:
              - img [ref=e48]
              - generic [ref=e50]: Tue, 20 Oct
            - generic [ref=e51]:
              - img [ref=e52]
              - generic [ref=e54]: Pragati Maidan Exhibition Grounds, Delhi
          - generic [ref=e55]:
            - generic [ref=e56]:
              - paragraph [ref=e57]: $300
              - generic [ref=e58]: 8 seats left!
            - link "Book Now" [ref=e59] [cursor=pointer]:
              - /url: /events/3
      - link "Add New Event" [ref=e61] [cursor=pointer]:
        - /url: /admin/events
        - button "Add New Event" [ref=e62]:
          - img [ref=e63]
          - text: Add New Event
  - contentinfo [ref=e65]:
    - generic [ref=e66]:
      - generic [ref=e67]:
        - generic [ref=e68]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e69]
          - paragraph [ref=e70]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e71]:
          - heading "Popular Courses" [level=3] [ref=e72]
          - list [ref=e73]:
            - listitem [ref=e74]:
              - link "Selenium WebDriver with Java" [ref=e75] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e76]:
              - link "Playwright with JavaScript" [ref=e77] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e78]:
              - link "RestAssured API Testing" [ref=e79] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e80]:
              - link "Cypress End-to-End Testing" [ref=e81] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e82]:
              - link "Appium Mobile Testing" [ref=e83] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e84]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e85]
          - paragraph [ref=e86]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e87] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e88]:
          - heading "EventHub Practice App" [level=3] [ref=e89]
          - list [ref=e90]:
            - listitem [ref=e91]:
              - link "Browse Events" [ref=e92] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e93]:
              - link "My Bookings" [ref=e94] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e95]:
              - link "Manage Events" [ref=e96] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e97]:
              - link "API Documentation" [ref=e98] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e99]:
        - paragraph [ref=e100]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e101]:
          - link "rahulshettyacademy.com →" [ref=e102] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e103] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e104]
```