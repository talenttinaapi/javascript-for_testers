const { test, expect } = require("@playwright/test");

test("Google homepage title", async ({ page }) => {
  await page.goto("https://www.google.com/");
  const title = await page.title();
  expect(title).toBe("Google");
});const { test, expect } = require("@playwright/test");

test('GET Request: used to get all the booking details', async ({ request }) => {
    try {
        // Sending a GET request to the "/booking" endpoint
        const response = await request.get("/booking");

        // Log the response body as JSON to the console
        const responseBody = await response.json();
        console.log(responseBody);

        // Validate that the response is successful
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        // Additional validation: Check if the response is an array (if applicable)
        expect(Array.isArray(responseBody)).toBeTruthy();
        // Optionally: Assert properties of the first booking if the array is not empty
        if (responseBody.length > 0) {
            expect(responseBody[0]).toHaveProperty('bookingid'); // example property
        }
    } catch (error) {
        console.error("Error during GET request:", error);
        throw error; // Rethrow the error to fail the test
    }
});
