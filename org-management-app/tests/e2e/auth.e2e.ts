import { test, expect } from '@playwright/test';

test.describe('Authentication E2E Tests', () => {
  test('User can log in with valid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('h1')).toHaveText('Welcome to the Dashboard');
  });

  test('User cannot log in with invalid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="email"]', 'wronguser@example.com');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');
    
    await expect(page.locator('.error-message')).toHaveText('Invalid email or password');
  });

  test('User can log out', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="email"]', 'testuser@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    
    await page.click('button#logout');
    await expect(page).toHaveURL('/login');
    await expect(page.locator('h1')).toHaveText('Login');
  });
});