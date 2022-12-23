import { test, expect } from '@playwright/test';

// test.describe.configure({ mode: 'parallel' });

// test.beforeAll(async () => {
// });
  
// test.afterAll(async () => {
// });

test('Visit Away Homepage', async ({ page }) => {
    await page.goto('https://www.awaytravel.com');

    // Expect page to load and veirfy "Shop Now" button is visible
    const shopNowButton = page.locator('#heroSection').getByRole('link', { name: 'Shop now' });
    await expect(shopNowButton).toBeVisible();

});

test('Navigate to Shop Page and Verify Title Exists', async ({ page }) => {
    await page.goto('https://www.awaytravel.com');

    const shopNavLink = page.getByRole('link', { name: 'Stores' });
    shopNavLink.click();

    await expect(page).toHaveURL(`https://www.awaytravel.com/stores`);
    await expect(page.getByText('Visit us IRL')).toBeVisible();
});

test('Scroll Through Store Page and Verify that Store Modals for Each Store Are Displayed Properly', async ({ page }) => {
    await page.goto('https://www.awaytravel.com/stores');

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

    await expect(austinStoreComponent).toContainText(['Austin']);
    await expect(austinStoreComponent).toContainText(['11701 Domain Blvd. Suite 120, Austin, TX 78758']);
    await expect(austinStoreComponent).toContainText(['See store']);
    await expect(austinStoreComponent).toBeVisible();
    await austinStoreComponent.hover();

    await expect(bostonStoreComponent).toContainText(['Boston']);
    await expect(bostonStoreComponent).toContainText(['50 Seaport Blvd., Boston, MA 02210']);
    await expect(bostonStoreComponent).toContainText(['See store']);
    await expect(bostonStoreComponent).toBeVisible();
    await bostonStoreComponent.hover();

    await expect(chicagoStoreComponent).toContainText(['Chicago']);
    await expect(chicagoStoreComponent).toContainText(['1121 N State St., Chicago, IL 60610']);
    await expect(chicagoStoreComponent).toContainText(['See store']);
    await expect(chicagoStoreComponent).toBeVisible();
    await chicagoStoreComponent.hover();

    await expect(dallasStoreComponent).toContainText(['Dallas']);
    await expect(dallasStoreComponent).toContainText(['3109 Knox St., Dallas, TX 75205']);
    await expect(dallasStoreComponent).toContainText(['See store']);
    await expect(dallasStoreComponent).toBeVisible();
    await dallasStoreComponent.hover();

    await expect(houstonStoreComponent).toContainText(['Houston']);
    await expect(houstonStoreComponent).toContainText(['4033 Westheimer Rd., Houston, TX 77027']);
    await expect(houstonStoreComponent).toContainText(['See store']);
    await expect(houstonStoreComponent).toBeVisible();
    await houstonStoreComponent.hover();

    await expect(laVeniceBeachStoreComponent).toContainText(['LA: Venice Beach']);
    await expect(laVeniceBeachStoreComponent).toContainText(['1103 Abbot Kinney Blvd. Unit #2, Venice, CA 90291']);
    await expect(laVeniceBeachStoreComponent).toContainText(['See store']);
    await expect(laVeniceBeachStoreComponent).toBeVisible();
    await laVeniceBeachStoreComponent.hover();

    await expect(laWestHollywoodStoreComponent).toContainText(['LA: West Hollywood']);
    await expect(laWestHollywoodStoreComponent).toContainText(['8400 Melrose Ave., Los Angeles, CA 90069']);
    await expect(laWestHollywoodStoreComponent).toContainText(['See store']);
    await expect(laWestHollywoodStoreComponent).toBeVisible();
    await laWestHollywoodStoreComponent.hover();

    await expect(londonStoreComponent).toContainText(['London']);
    await expect(londonStoreComponent).toContainText(['9 Earlham St., London WC2H 9LL, UK']);
    await expect(londonStoreComponent).toContainText(['See store']);
    await expect(londonStoreComponent).toBeVisible();
    await londonStoreComponent.hover();

    await expect(nycNoHoStoreComponent).toContainText(['NYC: NoHo']);
    await expect(nycNoHoStoreComponent).toContainText(['10 Bond St., New York, NY 10012']);
    await expect(nycNoHoStoreComponent).toContainText(['See store']);
    await expect(nycNoHoStoreComponent).toBeVisible();
    await nycNoHoStoreComponent.hover();

    await expect(nycWilliamsburgStoreComponent).toContainText(['NYC: Williamsburg']);
    await expect(nycWilliamsburgStoreComponent).toContainText(['111 N 3rd St., Brooklyn, NY 11249']);
    await expect(nycWilliamsburgStoreComponent).toContainText(['See store']);
    await expect(nycWilliamsburgStoreComponent).toBeVisible();
    await nycWilliamsburgStoreComponent.hover();

    await expect(sanFranciscoStoreComponent).toContainText(['San Francisco']);
    await expect(sanFranciscoStoreComponent).toContainText(['371 Hayes St., San Francisco, CA 94102']);
    await expect(sanFranciscoStoreComponent).toContainText(['See store']);
    await expect(sanFranciscoStoreComponent).toBeVisible();
    await sanFranciscoStoreComponent.hover();

    await expect(seattleStoreComponent).toContainText(['Seattle']);
    await expect(seattleStoreComponent).toContainText(['2645 NE 46th St., Seattle, WA 98105']);
    await expect(seattleStoreComponent).toContainText(['See store']);
    await expect(seattleStoreComponent).toBeVisible();
    await seattleStoreComponent.hover();

    await expect(torontoStoreComponent).toContainText(['Toronto']);
    await expect(torontoStoreComponent).toContainText(['Yorkdale Shopping Centre, 3401 Dufferin St. Unit 533, Toronto, ON M6A 2T9']);
    await expect(torontoStoreComponent).toContainText(['See store']);
    await expect(torontoStoreComponent).toBeVisible();
    await torontoStoreComponent.hover();

});

test('Hover over "SEE STORE" CTA and Verify that Arrow Icon Animates', async ({ page }) => {
    await page.goto('https://www.awaytravel.com/stores');

    const austinStoreArrow = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'Austin' }).locator('.cta_cta__VOQed');

    await expect(austinStoreArrow).toHaveClass('/cta_lightEnter__lSILv cta_animationEnter__6RXYX/');
    await austinStoreArrow.hover();
    const austinStoreArrowAnimated = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'Austin' }).locator('.cta_cta__VOQed');
    await expect(austinStoreArrowAnimated).toHaveClass('/cta_lightExit__lSILv cta_animationExit__6RXYX/');

});

test('Click on "SEE STORE" CTA for any given store', async ({ page }) => {
    await page.goto('https://www.awaytravel.com/stores');

    const nycNoHoStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'NYC: NoHo' }).locator('.cta_cta__VOQed');

    await nycNoHoStoreComponent.click();
    await expect(page).toHaveURL('https://www.awaytravel.com/stores/newyork');

    const nycNoHoStorePageTitle = page.locator('.store_location_header_header__vzMyl');
    const nycNoHoStorePageBody = page.locator('.store_location_header_description__8HnHG');
    const nycNoHoStorePagePhoneNumberLink = page.getByRole('link', { name: '(646) 649-3191'});
    const nycNoHoStorePageEmailLink = page.getByRole('link', { name: 'bond@awaytravel.com'});
    const nycNoHoStorePageFAQLink = page.getByRole('link', { name: 'All FAQs'});


    await expect(nycNoHoStorePageTitle).toBeVisible;
    await expect(nycNoHoStorePageTitle).toContainText('Away in New York City: NoHo');
    await expect(nycNoHoStorePageBody).toBeVisible;
    await expect(nycNoHoStorePageBody).toContainText('NoHo, come shop our lineup IRL! Every suitcase purchase comes with a free foil-stamped luggage tag, now through 12/24.*');
    await expect(nycNoHoStorePagePhoneNumberLink).toBeVisible();
    await expect(nycNoHoStorePagePhoneNumberLink).toContainText('(646) 649-3191');
    await expect(nycNoHoStorePageEmailLink).toBeVisible();
    await expect(nycNoHoStorePageEmailLink).toContainText('bond@awaytravel.com');
    await expect(nycNoHoStorePageFAQLink).toBeVisible();
    await expect(nycNoHoStorePageFAQLink).toContainText('All FAQs');
});

test('Scroll down to "Additional store information" section', async ({ page }) => {
    await page.goto('https://www.awaytravel.com/stores');

    const nycNoHoStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'NYC: NoHo' }).locator('.cta_cta__VOQed');

    await nycNoHoStoreComponent.click();
    await expect(page).toHaveURL('https://www.awaytravel.com/stores/newyork');

    const sanitizingStationsIcon = page.locator('.store_location_messages_tileTitle__tiIKt').filter({ hasText: 'Sanitizing stations' });
    const paymentOptionsIcon = page.locator('.store_location_messages_tileTitle__tiIKt').filter({ hasText: 'Payment Options'});
    const curbsidePickupIcon = page.locator('.store_location_messages_tile__MtGL9').filter({ hasText: 'Curbside pickup'});

    await sanitizingStationsIcon.hover();
    await expect(sanitizingStationsIcon).toBeVisible();
    await paymentOptionsIcon.hover();
    await expect(paymentOptionsIcon).toBeVisible();
    await curbsidePickupIcon.hover();
    await expect(curbsidePickupIcon).toBeVisible();
 
});

test.only('Scroll down to store Gallery section', async ({ page }) => {
    await page.goto('https://www.awaytravel.com/stores');

    const nycNoHoStoreComponent = page.getByRole('link', { name: 'See store' }).filter({ hasText: 'NYC: NoHo' }).locator('.cta_cta__VOQed');

    await nycNoHoStoreComponent.click();
    await expect(page).toHaveURL('https://www.awaytravel.com/stores/newyork');

    const imageGalleryNextButton = page.locator('.store_location_gallery_nextButton__4vI22');
    const imageGallery = page.locator('.store_location_gallery_slideImage__hmQua').first();

    await imageGallery.hover();
 
});




