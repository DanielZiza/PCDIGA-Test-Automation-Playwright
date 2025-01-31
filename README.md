PCDIGA Test Automation with Playwright

This repository contains automated tests for the PCDIGA website using Playwright. The goal of this project is to ensure the quality and stability of the platform's functionalities through efficient and reliable automated tests.
🚀 Technologies Used

    Playwright – Test automation framework
    TypeScript – Programming language
    Jest – Testing framework
    Allure Report – Report generation

📌 Test Features

✔️ End-to-end (E2E) functional tests
✔️ Purchase flow validation
✔️ Login and registration tests
✔️ Detailed report generation
🔧 How to Run the Tests

    Clone this repository:

git clone https://github.com/DanielZiza/PCDIGA-Test-Automation-Playwright.git
cd PCDIGA-Test-Automation-Playwright

Install dependencies:

npm install

Run the tests:

npx playwright test

To view the Allure report:

    npx allure serve allure-results

📄 Project Structure

📂 PCDIGA-Test-Automation-Playwright  
 ├── 📂 tests             # Playwright test cases  
 ├── 📂 reports           # Execution reports  
 ├── 📂 config            # Configurations and fixtures  
 ├── package.json        # Project dependencies  
 ├── playwright.config.ts # Playwright configuration  
 └── README.md           # Project documentation  

📢 Contribution

Feel free to contribute with improvements, suggestions, or open issues to discuss new test scenarios.
