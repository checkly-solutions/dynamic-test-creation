// @ts-nocheck
import { test, expect } from '@playwright/test';
import { defaults } from '../defaults';

test.describe(`Bank: ${defaults.bank}`, () => {
  defaults.services.forEach((service) => {
    test(`Visit ${service.serviceName}`, async ({ page }) => {
      // Visit the service URL
      const response = await page.goto(service.serviceUrl);

      // Check if the status is 200
      expect(response?.status()).toBe(200);

      // Take a screenshot and compare with baseline
      await expect(page).toHaveScreenshot(`${service.serviceName}.png`);
    });
  });
});
