# Jupiter Toys

Technical assessment of test automation using Webdriver.io/Selenium.

## Installation

- Clone the repo from https://github.com/sebastianlealj10/jupyter_toys_wdio
- Ensure you have node installed globally in your pc, the recommended node version is >=14. Install the dependencies in the project folder using the next npm command.
```bash
npm install
```
## Run the tests

To run it from command line you can use

```bash
npm run wdio
```
This will run the tests on Chrome by default.

## Consideration

This solution uses Webdriver.io and Selenium to run the tests, the abstraction is based on the design pattern page object model and the test runner is mocha with mocha format.
This implementation is different from the Cypress solution, as it is an actual server interacting with the webpage, it is recomended to abstract the webpage elements in classes, where the elements are getters and the action over the webpage are methods of the specified class.

## Output
```bash
"spec" Reporter:
------------------------------------------------------------------
[chrome 111.0.5563.110 mac os x #0-1] Running: chrome (v111.0.5563.110) on mac os x
[chrome 111.0.5563.110 mac os x #0-1] Session ID: 715b2993a77af8ea2911500ce3c038c7
[chrome 111.0.5563.110 mac os x #0-1]
[chrome 111.0.5563.110 mac os x #0-1] » /test/specs/contact_page.e2e.ts
[chrome 111.0.5563.110 mac os x #0-1] Validation over the Contact page - Test cases 1 and 2
[chrome 111.0.5563.110 mac os x #0-1]    ✓ The Contact page should check that all mandatory fields are populated by the user
[chrome 111.0.5563.110 mac os x #0-1]    ✓ The Contact page should validate the successful submission message
[chrome 111.0.5563.110 mac os x #0-1]
[chrome 111.0.5563.110 mac os x #0-1] 2 passing (3.6s)
------------------------------------------------------------------
[chrome 111.0.5563.110 mac os x #0-0] Running: chrome (v111.0.5563.110) on mac os x
[chrome 111.0.5563.110 mac os x #0-0] Session ID: 8c50785ca6ef2a4dfb12240038e2e784
[chrome 111.0.5563.110 mac os x #0-0]
[chrome 111.0.5563.110 mac os x #0-0] » /test/specs/shop_page.e2e.ts
[chrome 111.0.5563.110 mac os x #0-0] Validation over the Shop page - Test cases 3 and 4
[chrome 111.0.5563.110 mac os x #0-0]    ✓ The Shop page should calculate the totals of the checked items
[chrome 111.0.5563.110 mac os x #0-0]    ✓ The Shop page should allow to add products to the cart
[chrome 111.0.5563.110 mac os x #0-0]
[chrome 111.0.5563.110 mac os x #0-0] 2 passing (5.1s)


Spec Files:      2 passed, 2 total (100% completed) in 00:00:08 
```
