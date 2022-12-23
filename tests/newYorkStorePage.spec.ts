import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    //BaseURL is definied in the playwright.config file so all we need to do is navigate to specific url for each test case
    await page.goto('/stores/newyork');

});

test('Scroll down to "Additional store information" section', async ({ page }) => {

    //Stores "Additional store information" elements
    const sanitizingStationsIcon = page.locator('.store_location_messages_tileTitle__tiIKt').filter({ hasText: 'Sanitizing stations' });
    const paymentOptionsIcon = page.locator('.store_location_messages_tileTitle__tiIKt').filter({ hasText: 'Payment Options'});
    const curbsidePickupIcon = page.locator('.store_location_messages_tile__MtGL9').filter({ hasText: 'Curbside pickup'});

    //Uses "hover" to initiate playwright's automatic scrolling to a given element on the page

    //Scrolls to Additional store information elements and verifies they appear on page
    await sanitizingStationsIcon.hover();
    await expect(sanitizingStationsIcon).toBeVisible();
    await paymentOptionsIcon.hover();
    await expect(paymentOptionsIcon).toBeVisible();
    await curbsidePickupIcon.hover();
    await expect(curbsidePickupIcon).toBeVisible();
});

test('Scroll down to store Gallery section', async ({ page }) => {

    //Stores image gallery element
    const imageGallery = page.locator('div:nth-child(2) > .store_location_gallery_slideImage__hmQua > span > .image_component__IJv7W');
    
    //Stores image gallery next button
    const imageGalleryNextButton = page.locator('.store_location_gallery_nextButton__4vI22');

    //Stores image gallery previous button
    const imageGalleryPrevButton = page.locator('.store_location_gallery_prevButton__D7Vme');

    //Uses "hover" to initiate playwright's automatic scrolling to a given element on the page

    //Scrolls down to image gallery element  
    await imageGallery.hover();

    //Verifies image gallery is visibile on page
    await expect(imageGallery).toBeVisible();

    //Verifies navigation arrows are visibile on page
    await expect(imageGalleryPrevButton).toBeVisible();
    await expect(imageGalleryNextButton).toBeVisible();
});

//This may fail in headless mode due to Playwright limitations with dragTo() method
test('Navigate through images in gallery using click and drag', async ({ page }) => {

    //Stores image gallery and image gallery swipper wrapper elements
    const imageGallery = page.locator('div:nth-child(2) > .store_location_gallery_slideImage__hmQua > span > .image_component__IJv7W');
    const gallerySwipperWrapper = page.locator('.swiper-wrapper');

    //Veirfies the begininng state of the tranform to assert a specific image is being displayed
    await expect(gallerySwipperWrapper).toHaveAttribute('style', 'transform: translate3d(-1280px, 0px, 0px); transition-duration: 0ms;');

    //Scrolls to image gallery
    await imageGallery.hover();
    await expect(imageGallery).toBeVisible();

    //Drags image gallery element in order to move to next image in gallery
    await imageGallery.dragTo(imageGallery, {
    sourcePosition: { x: 70, y: 50 },
    targetPosition: { x: 10, y: 50 },
    });

    //Veirfies the final state of the tranform to assert a new image is being displayed
    await expect(gallerySwipperWrapper).toHaveAttribute('style', 'transform: translate3d(-2560px, 0px, 0px); transition-duration: 0ms;');
});

/*

NOTE: There did not seem to be any numbers assigned to each image, 
so I opted to include the following two test cases for traversing 
the gallery using the navigation arrows instead

*/

test('Navigate through images in gallery using next arrow', async ({ page }) => {

    //Stores Navigation buttons in gallery
    const imageGalleryNextButton = page.locator('.store_location_gallery_nextButton__4vI22');
    const imageGalleryPrevButton = page.locator('.store_location_gallery_prevButton__D7Vme');

    //Stores image gallery and image gallery swipper wrapper elements
    const imageGallery = page.locator('div:nth-child(2) > .store_location_gallery_slideImage__hmQua > span > .image_component__IJv7W');
    const gallerySwipperWrapper = page.locator('.swiper-wrapper');

    //Veirfies the begininng state of the tranform to assert a specific image is being displayed
    await expect(gallerySwipperWrapper).toHaveAttribute('style', 'transform: translate3d(-1280px, 0px, 0px); transition-duration: 0ms;');

    //Scrolls to image gallery
    await imageGallery.hover();

    //Clicks on next arrow
    await imageGalleryNextButton.click();

    //Veirfies the final state of the tranform to assert a new image is being displayed
    await expect(gallerySwipperWrapper).toHaveAttribute('style', 'transform: translate3d(-2560px, 0px, 0px); transition-duration: 0ms;');
});

test('Navigate through images in gallery using previous arrow', async ({ page }) => {

    //Stores Navigation buttons in gallery
    const imageGalleryNextButton = page.locator('.store_location_gallery_nextButton__4vI22');
    const imageGalleryPrevButton = page.locator('.store_location_gallery_prevButton__D7Vme');

    //Stores image gallery and image gallery swipper wrapper elements
    const imageGallery = page.locator('div:nth-child(2) > .store_location_gallery_slideImage__hmQua > span > .image_component__IJv7W');
    const gallerySwipperWrapper = page.locator('.swiper-wrapper');

    //Veirfies the begininng state of the tranform to assert a specific image is being displayed
    await expect(gallerySwipperWrapper).toHaveAttribute('style', 'transform: translate3d(-1280px, 0px, 0px); transition-duration: 0ms;');

    //Scrolls to image gallery
    await imageGallery.hover();

    //Clicks on previous arrow
    await imageGalleryPrevButton.click();

    //Veirfies the final state of the tranform to assert a new image is being displayed
    await expect(gallerySwipperWrapper).toHaveAttribute('style', 'transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;');
});

test('Navigate to Map', async ({ page }) => {

    //Stores map modal
    const mapComponent = page.getByRole('region', { name: 'Map' });
    //Stores location pin element 
    const locationPinComponent = page.getByRole('button', {name: 'Away in New York City: NoHo' });

    //Stores info container component
    const storeInfoContainer = page.locator('.store_location_info_infoContainer__zpQSG');

    //Scrolls to map component
    await mapComponent.hover();

    //Verifies map modal is visible
    await expect(mapComponent).toBeVisible();

    //Verifies location pin modal is visible
    await expect(locationPinComponent).toBeVisible();

    //Verifies Address is present in information modal
    await expect(storeInfoContainer).toContainText(['Address10 Bond St.New York,NY 10012']);

    //Verifies Hours are present in information modal
    await expect(storeInfoContainer).toContainText(['HoursMon-Fri   11am–7pmSat   11am-8pmSun   12pm–7pmHOLIDAY HOURS12/23   11am-8pm12/24   11am-5pm12/25   Closed']);
});

//This may fail due to Playwright's limitations with dragTo() method in headless mode
test('Interact with Map - User should be able to drag within map', async ({ page }) => {

    //Stores map modal
    const mapComponent = page.getByRole('region', { name: 'Map' });

    //Stores map transform div element for us to track its state as the map is interacted with
    const mapTransformDiv = page.getByRole('region', { name: 'Map' }).locator('div').first();

    //Scrolls to map modal
    await mapComponent.hover();
    await expect(mapComponent).toBeVisible();

    //Verifies map transform div element's intial state  
    await expect(mapTransformDiv).toHaveAttribute('style', 'z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);');

    //Drags within the map modal to interact with map
    await mapComponent.dragTo(mapComponent, {
        sourcePosition: { x: 70, y: 50 },
        targetPosition: { x: 10, y: 50 },
    });

    //Verifies that map transform div element state has been modified
    await expect(mapTransformDiv).toHaveAttribute('style', 'z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px); will-change: transform;');
});

test('Interact with Map - User should be able to zoom in on map', async ({ page }) => {

    //Stores map modal
    const mapComponent = page.getByRole('region', { name: 'Map' });

    //Stores map transform div element for us to track its state as the map is interacted with
    const mapTransformDiv = page.getByRole('region', { name: 'Map' }).locator('div').first();

    //Stores Zoom In button
    const zoomInbutton = page.getByRole('button', { name: 'Zoom in' });

    //Scrolls to map modal
    await mapComponent.hover();
    await expect(mapComponent).toBeVisible();

    //Verifies map transform div element initial state
    await expect(mapTransformDiv).toHaveAttribute('style', 'z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);');

    //Clicks on zoom in button and verifies map transform div element is modified
    await zoomInbutton.click().then(() => {
        expect(mapTransformDiv).toHaveAttribute('style', 'z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px); will-change: transform;');
    });

    //Verifies map transform div element returns to initial state
    await expect(mapTransformDiv).toHaveAttribute('style', 'z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);');
});

test('Interact with Map - User should be able to zoom out on map', async ({ page }) => {

    //Stores map modal
    const mapComponent = page.getByRole('region', { name: 'Map' });

    //Stores map transform div element for us to track its state as the map is interacted with    
    const mapTransformDiv = page.getByRole('region', { name: 'Map' }).locator('div').first();

    //Stores Zoom Out button
    const zoomOutbutton = page.getByRole('button', { name: 'Zoom out' });

    //Scrolls to map modal
    await mapComponent.hover();
    await expect(mapComponent).toBeVisible();

    //Verifies map transform div element initial state
    await expect(mapTransformDiv).toHaveAttribute('style', 'z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);');

    //Clicks on zoom out button and verifies map transform div element is modified
    await zoomOutbutton.click().then(() => {
        expect(mapTransformDiv).toHaveAttribute('style', 'z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px); will-change: transform;');
    });
    
    //Verifies map transform div element returns to initial state
    await expect(mapTransformDiv).toHaveAttribute('style', 'z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);');
});
