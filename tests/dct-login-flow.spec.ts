import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test('To verify DCT internal login flow home page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await page.goto('https://groupon.okta.com/app/template_saml_2_0/kzkzb11nSREUXXNRYBAF/sso/saml?SAMLRequest=hVLBbtswDP0V33RyZGvN0gpxAC9ZgQBdETjt0O0SKDKzGrFFTaLbrF8%2FyU22HLb2JIB87%2FHxiVOvutbKsqdHU8HPHjwlpffgqEEzR%2BP7Dtwa3FOj4b66KdgjkfWS8xrRdcqkRo1%2BOOwtmhqeRho7jntSPMpy75EliyDZGBX1%2FrKPlFHEDiRlLSfobKsINpG8EZuM71%2F2L9s8N%2Bvq8%2F3Dw2317VN5HVUHeZYsFwXbXH2s9WSXi7SeCJFeCDFOry5Vndb5ZLvVF9vLUA5Q73tYGk%2FKUMFEFlDZhzQb32W5FJkcZ99Z8hWcH1yKUcaSQ9caL%2BOggvXOSFS%2B8dKoDrwkLdfllxsZgFKd0jqn2Lc51iGhxpbNphEtB3du9m62U34On77%2B3W2QXy5W2Db6V1K2LT7PHYQYC0auB5ZcRzF6ZwkiF6vpbgDL3ngLutk1UDN%2BGnS8D6iHawnHQXCgZI6dVa7xMTg4KE2npc5R8zbEVMFu9qYJLXXEhfIqPM%2Fo6lUICnQYeedUsISOjhH8U%2Fy19x%2Bjf7rntz77DQ%3D%3D&RelayState=%7B%22destinationId%22%3A%22merchant-center%22%2C%22destinationPath%22%3A%22%2Fmerchant%2Fcenter%2Flogin%2Finternal%22%7D');
  await loginPage.internalLogin('svc_ttdtest', 'Qwerty123***', '49811acf-c05a-4ed7-9d0a-f08622cf73a2');
    await page.waitForTimeout(3000);
  await page.goto(`/merchant/center/?mid=food-court-595533091&internal=true`);
  await homePage.navigateToCampaignSection();
  await homePage.createNewCampaign();
});