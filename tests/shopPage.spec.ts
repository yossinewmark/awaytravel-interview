import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    //BaseURL is definied in the playwright.config file so all we need to do is navigate to specific url for each test case
    await page.goto('/stores');

});

test('Scroll Through Store Page and Verify that Store Modals for Each Store Are Displayed Properly', async ({ page }) => {
    
    //Storing each store modals as an object to assert each of their visibility on the page below
    const austinStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'Austin' }).locator('.content_tile_medium_diptych_copyContainer__iZyH6');
    const bostonStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'Boston' }).locator('.content_tile_medium_diptych_copyContainer__iZyH6');
    const chicagoStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'Chicago' }).locator('.content_tile_medium_diptych_copyContainer__iZyH6');
    const dallasStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'Dallas' }).locator('.content_tile_medium_diptych_copyContainer__iZyH6');
    const houstonStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'Houston' }).locator('.content_tile_medium_diptych_copyContainer__iZyH6');
    const laVeniceBeachStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'LA: Venice Beach' }).locator('.content_tile_medium_diptych_copyContainer__iZyH6');
    const laWestHollywoodStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'LA: West Hollywood' }).locator('.content_tile_medium_diptych_copyContainer__iZyH6');
    const londonStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'London' }).locator('.content_tile_medium_diptych_copyContainer__iZyH6');
    const nycNoHoStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'NYC: NoHo' }).locator('.content_tile_medium_diptych_copyContainer__iZyH6');
    const nycWilliamsburgStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'NYC: Williamsburg' }).locator('.content_tile_medium_diptych_copyContainer__iZyH6');
    const sanFranciscoStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'San Francisco' }).locator('.content_tile_medium_diptych_copyContainer__iZyH6');
    const seattleStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'Seattle' }).locator('.content_tile_medium_diptych_copyContainer__iZyH6');
    const torontoStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'Toronto' }).locator('.content_tile_medium_diptych_copyContainer__iZyH6');

    //Uses "hover" to initiate playwright's automatic scrolling to a given element on the page

    //Scrolls to element
    await austinStoreComponent.hover();
    
    //Asserts Austin Store Modal appears and is displayed properly
    await expect(austinStoreComponent).toBeVisible();


    //Store name appears
    await expect(austinStoreComponent).toContainText(['Austin']);
    //Address of store is present
    await expect(austinStoreComponent).toContainText(['11701 Domain Blvd. Suite 120, Austin, TX 78758']);
    //SEE STORE" CTA is present
    await expect(austinStoreComponent).toContainText(['See store']);

    //Asserts Boston Store Modal appears and is displayed properly
    await bostonStoreComponent.hover();
    await expect(bostonStoreComponent).toBeVisible();
    
    //Store name appears
    await expect(bostonStoreComponent).toContainText(['Boston']);
    //Address of store is present   
    await expect(bostonStoreComponent).toContainText(['50 Seaport Blvd., Boston, MA 02210']);
    //SEE STORE" CTA is present
    await expect(bostonStoreComponent).toContainText(['See store']);

    //Asserts Chicago Store Modal appears and is displayed properly
    await chicagoStoreComponent.hover();
    await expect(chicagoStoreComponent).toBeVisible();

    //Store name appears
    await expect(chicagoStoreComponent).toContainText(['Chicago']);
    //Address of store is present   
    await expect(chicagoStoreComponent).toContainText(['1121 N State St., Chicago, IL 60610']);
    //SEE STORE" CTA is present
    await expect(chicagoStoreComponent).toContainText(['See store']);

    //Asserts Dallas Store Modal appears and is displayed properly
    await dallasStoreComponent.hover();
    await expect(dallasStoreComponent).toBeVisible();

    //Store name appears
    await expect(dallasStoreComponent).toContainText(['Dallas']);
    //Address of store is present       
    await expect(dallasStoreComponent).toContainText(['3109 Knox St., Dallas, TX 75205']);
    //SEE STORE" CTA is present   
    await expect(dallasStoreComponent).toContainText(['See store']);


    //Asserts Houston Store Modal appears and is displayed properly
    await houstonStoreComponent.hover();
    await expect(houstonStoreComponent).toBeVisible();
    await expect(houstonStoreComponent).toContainText(['Houston']);
    await expect(houstonStoreComponent).toContainText(['4033 Westheimer Rd., Houston, TX 77027']);
    await expect(houstonStoreComponent).toContainText(['See store']);

    //Asserts LA: Venice Beach Store Modal appears and is displayed properly
    await laVeniceBeachStoreComponent.hover();
    await expect(laVeniceBeachStoreComponent).toBeVisible();
    await expect(laVeniceBeachStoreComponent).toContainText(['LA: Venice Beach']);
    await expect(laVeniceBeachStoreComponent).toContainText(['1103 Abbot Kinney Blvd. Unit #2, Venice, CA 90291']);
    await expect(laVeniceBeachStoreComponent).toContainText(['See store']);

    //Asserts LA: West Hollywood as Store Modal appears and is displayed properly
    await laWestHollywoodStoreComponent.hover();
    await expect(laWestHollywoodStoreComponent).toBeVisible();
    await expect(laWestHollywoodStoreComponent).toContainText(['LA: West Hollywood']);
    await expect(laWestHollywoodStoreComponent).toContainText(['8400 Melrose Ave., Los Angeles, CA 90069']);
    await expect(laWestHollywoodStoreComponent).toContainText(['See store']);

    //Asserts London Store Modal appears and is displayed properly
    await londonStoreComponent.hover();
    await expect(londonStoreComponent).toBeVisible();
    await expect(londonStoreComponent).toContainText(['London']);
    await expect(londonStoreComponent).toContainText(['9 Earlham St., London WC2H 9LL, UK']);
    await expect(londonStoreComponent).toContainText(['See store']);

    //Asserts NYC:NoHo Store Modal appears and is displayed properly
    await nycNoHoStoreComponent.hover();
    await expect(nycNoHoStoreComponent).toBeVisible();
    await expect(nycNoHoStoreComponent).toContainText(['NYC: NoHo']);
    await expect(nycNoHoStoreComponent).toContainText(['10 Bond St., New York, NY 10012']);
    await expect(nycNoHoStoreComponent).toContainText(['See store']);

    //Asserts NYC: Williamsburg Store Modal appears and is displayed properly
    await nycWilliamsburgStoreComponent.hover();
    await expect(nycWilliamsburgStoreComponent).toBeVisible();
    await expect(nycWilliamsburgStoreComponent).toContainText(['NYC: Williamsburg']);
    await expect(nycWilliamsburgStoreComponent).toContainText(['111 N 3rd St., Brooklyn, NY 11249']);
    await expect(nycWilliamsburgStoreComponent).toContainText(['See store']);

    //Asserts San Francisco Store Modal appears and is displayed properly
    await sanFranciscoStoreComponent.hover();
    await expect(sanFranciscoStoreComponent).toBeVisible();
    await expect(sanFranciscoStoreComponent).toContainText(['San Francisco']);
    await expect(sanFranciscoStoreComponent).toContainText(['371 Hayes St., San Francisco, CA 94102']);
    await expect(sanFranciscoStoreComponent).toContainText(['See store']);

    //Asserts Seattle Store Modal appears and is displayed properly
    await seattleStoreComponent.hover();
    await expect(seattleStoreComponent).toBeVisible();
    await expect(seattleStoreComponent).toContainText(['Seattle']);
    await expect(seattleStoreComponent).toContainText(['2645 NE 46th St., Seattle, WA 98105']);
    await expect(seattleStoreComponent).toContainText(['See store']);

    //Asserts Toronto Store Modal appears and is displayed properly
    await torontoStoreComponent.hover();
    await expect(torontoStoreComponent).toBeVisible();
    await expect(torontoStoreComponent).toContainText(['Toronto']);
    await expect(torontoStoreComponent).toContainText(['Yorkdale Shopping Centre, 3401 Dufferin St. Unit 533, Toronto, ON M6A 2T9']);
    await expect(torontoStoreComponent).toContainText(['See store']);


});

//This test will fail due to limitations from playwright
test('Hover over "SEE STORE" CTA and Verify that Arrow Icon Animates', async ({ page }) => {
    const austinStoreArrow = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'Austin' }).locator('.cta_cta__VOQed');

    /*
    The following class is the only change that occurs when the animation is triggered. 
    Unfortunatley, it seems to be hidden from playwright so this test will fail since we cannot interact with it.
    */
    await expect(austinStoreArrow).toHaveClass('/cta_lightEnter__lSILv cta_animationEnter__6RXYX/');
    await austinStoreArrow.hover();

    //Stores element modified due to animation
    const austinStoreArrowAnimated = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'Austin' }).locator('.cta_cta__VOQed');
   
    //Asserts that animation was triggered
    await expect(austinStoreArrowAnimated).toHaveClass('/cta_lightExit__lSILv cta_animationExit__6RXYX/');

});

test('Click on "SEE STORE" CTA for any given store', async ({ page }) => {
    const nycNoHoStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'NYC: NoHo' }).locator('.cta_cta__VOQed');

    //Clicks on NYC:NoHo store modal
    await nycNoHoStoreComponent.click();

    //verifies user is navigated to NYC:NoHo store page
    await expect(page).toHaveURL('https://www.awaytravel.com/stores/newyork');

    //Stores Page title element for verification
    const nycNoHoStorePageTitle = page.locator('.store_location_header_header__vzMyl');
    //Stores Page body element for verification
    const nycNoHoStorePageBody = page.locator('.store_location_header_description__8HnHG');
    //Stores Phone Number element for verification
    const nycNoHoStorePagePhoneNumberLink = page.getByRole('link', { name: '(646) 649-3191'});
    //Stores Email element for verification
    const nycNoHoStorePageEmailLink = page.getByRole('link', { name: 'bond@awaytravel.com'});
    //Stores FQA Chat box element for verification
    const nycNoHoStorePageFAQLink = page.getByRole('button', { name: 'Open Chat'});

    //Veifies Title reads "Away in Away in New York City: NoHo"
    await expect(nycNoHoStorePageTitle).toBeVisible;
    await expect(nycNoHoStorePageTitle).toContainText('Away in New York City: NoHo');

    //Verifies Small descriptions of store is present on page
    await expect(nycNoHoStorePageBody).toBeVisible;
    await expect(nycNoHoStorePageBody).toContainText('NoHo, come shop our lineup IRL! Every suitcase purchase comes with a free foil-stamped luggage tag, now through 12/24.*');
    
    //Verifies Phone Number is present on page
    await expect(nycNoHoStorePagePhoneNumberLink).toBeVisible();
    await expect(nycNoHoStorePagePhoneNumberLink).toContainText('(646) 649-3191');

    //Verifies Email is present on page
    await expect(nycNoHoStorePageEmailLink).toBeVisible();
    await expect(nycNoHoStorePageEmailLink).toContainText('bond@awaytravel.com');

    //Verifies FAQ Chat Box is present on page
    await expect(nycNoHoStorePageFAQLink).toBeVisible();
});