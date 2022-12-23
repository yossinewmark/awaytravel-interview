# Away Travel Interview Project

This suite uses Playwright (Typescript) for testing the https://www.awaytravel.com/ application

## Setup:
_Installation_
- In order to install the test suite, simply clone the repository to your local machine and run `npm install` in the root directory. This should install all of the necessary dependencies for the project.

_Headless_
- By default, this suite is set to `headless` mode, which can be modified in the `playwright.config.ts` file.

_Browser_
- By default, tests are run on `Chrome`. This can be modified in the `playwright.config.ts` file.

### Running the Tests
- In order to run the login tests, run the following command in the project root directory (same directory that include the `package.json` file): 
    `npx playwright test` 
- The default timeout is set to 5 seconds for each command, which can be modified in the `playwright.config.ts` file.

#### Test Case Structure
- Tests are broken up into separate spec files based on which page is being tested. Before each test, the user is navigated to the given page under test, followed by the steps taken to complete the test, and assertions related to each test case.

##### Note on Data Tags
- One callout for the solutions given is that they use the most optimal path available and in many cases are relying on the direct path in order to interact with the correct elements for each test. The tests written can be significatly improved with the addition of data tags to the front-end for cleaner and less flakey E2E automation 