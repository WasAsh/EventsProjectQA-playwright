# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.ts >> Authentication & Login Tests >> Login with valid credentials
- Location: tests\authentication.spec.ts:9:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#password')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - generic [ref=e6]: RSA
          - generic [ref=e7]: Rahul Shetty Academy
        - generic [ref=e8]:
          - generic [ref=e13]: eventhub.app
          - img "EventHub app preview" [ref=e14]
        - list [ref=e16]:
          - listitem [ref=e17]:
            - generic [ref=e18]: ⚡
            - generic [ref=e19]: Live REST APIs — test real endpoints, not mocks
          - listitem [ref=e20]:
            - generic [ref=e21]: 🔒
            - generic [ref=e22]: Isolated sandbox — your data, your tests, no conflicts
          - listitem [ref=e23]:
            - generic [ref=e24]: 🎫
            - generic [ref=e25]: Auth, CRUD, bookings — flows you'll face on the job
          - listitem [ref=e26]:
            - generic [ref=e27]: 🤖
            - generic [ref=e28]: Built for Selenium, Playwright, RestAssured & more
      - generic [ref=e30]:
        - paragraph [ref=e31]: 50,000+
        - paragraph [ref=e32]: QA engineers trained worldwide
    - generic [ref=e34]:
      - generic [ref=e35]:
        - 'heading "The #1 QA Practice Hub for Automation Engineers" [level=2] [ref=e36]':
          - text: "The #1 QA Practice Hub"
          - text: for Automation Engineers
        - paragraph [ref=e37]: EventHub is a production-grade practice app designed so you can sharpen your testing skills on real-world scenarios — before your next interview or project.
      - link "API Documentation (Swagger)" [ref=e38] [cursor=pointer]:
        - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - img [ref=e39]
        - text: API Documentation (Swagger)
      - generic [ref=e41]:
        - generic [ref=e42]:
          - img [ref=e44]
          - heading "Sign in to EventHub" [level=1] [ref=e46]
          - paragraph [ref=e47]: Enter your credentials to continue
        - generic [ref=e48]:
          - generic [ref=e49]:
            - generic [ref=e50]: Email
            - textbox "Email" [active] [ref=e51]:
              - /placeholder: you@email.com
          - generic [ref=e52]:
            - generic [ref=e53]: Password
            - textbox "Password" [ref=e54]:
              - /placeholder: ••••••
          - button "Sign In" [ref=e55] [cursor=pointer]
        - paragraph [ref=e56]:
          - text: Don't have an account?
          - link "Register" [ref=e57] [cursor=pointer]:
            - /url: /register
      - paragraph [ref=e58]:
        - text: A practice environment by
        - link "RahulShettyAcademy.com" [ref=e59] [cursor=pointer]:
          - /url: https://rahulshettyacademy.com
        - text: — used by QA engineers worldwide to master automation testing.
  - alert [ref=e60]
```

# Test source

```ts
  1  | import {Page , Locator} from '@playwright/test';
  2  | 
  3  | 
  4  | export class LoginPage{
  5  | 
  6  |     page : Page ;
  7  |     userNameField : Locator ;
  8  |     passwordField : Locator ;
  9  |     logInBTN : Locator ;
  10 |     invalidBanner : Locator ;
  11 |     errorTextEmptyField : Locator;
  12 |     logOutBTN : Locator ;
  13 | 
  14 |     constructor(page : Page){
  15 |         this.page = page ;
  16 |         this.userNameField = page.locator('#email');
  17 |         this.passwordField = page.locator('#password');
  18 |         this.logInBTN = page.locator('button#login-btn');
  19 |         this.invalidBanner = page.locator('text=Invalid email or password');
  20 |         this.errorTextEmptyField = page.locator(".text-red-600");
  21 |         this.logOutBTN = page.getByRole('button', { name: 'Logout' });
  22 |     }
  23 | 
  24 |     async goTo(urlString : string){
  25 |         await this.page.goto(urlString);
  26 |     }
  27 | 
  28 |     async loginProcess(user_name : string , password : string){
  29 |         await this.userNameField.fill(user_name);
> 30 |         await this.passwordField.fill(password);
     |                                  ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  31 |         await this.logInBTN.click();
  32 |         await this.page.waitForLoadState('networkidle');
  33 |     }
  34 | 
  35 | }
```