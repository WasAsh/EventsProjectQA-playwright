# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.ts >> Authentication & Login Tests >> Login with invalid credentials
- Location: tests\authentication.spec.ts:21:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://eventhub.rahulshettyacademy.com/", waiting until "load"

```

# Page snapshot

```yaml
- status "Loading" [ref=e3]
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
> 25 |         await this.page.goto(urlString);
     |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
  26 |     }
  27 | 
  28 |     async loginProcess(user_name : string , password : string){
  29 |         await this.userNameField.fill(user_name);
  30 |         await this.passwordField.fill(password);
  31 |         await this.logInBTN.click();
  32 |         await this.page.waitForLoadState('networkidle');
  33 |     }
  34 | 
  35 | }
```