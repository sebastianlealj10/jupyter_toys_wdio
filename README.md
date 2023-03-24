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

