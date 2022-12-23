import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    //BaseURL is definied in the playwright.config file so all we need to do is navigate to specific url for each test case
    await page.goto('/');

});
  
test('Visit Away Homepage', async ({ page }) => {

    //Stores Shop Now button element for verification
    const shopNowButton = page.locator('#heroSection').getByRole('link', { name: 'Shop now' });
    
    //Expect page to load by veirfying that "Shop Now" button is visible on page
    await expect(shopNowButton).toBeVisible();

});

test('Navigate to Shop Page and Verify Title Exists', async ({ page }) => {

    //Stores "Stores Navigation" element
    const storesNavLink = page.getByRole('link', { name: 'Stores' });

    //Clicks on Stores navigation link
    await storesNavLink.click();

    //Verifies that user is navigated to the stores list page
    await expect(page).toHaveURL(`https://www.awaytravel.com/stores`);

    //Verifies that title on current page is now "Visit us IRL" to assert that user is on the Stores page
    await expect(page.getByText('Visit us IRL')).toBeVisible();

});