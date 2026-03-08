import { test, expect } from '../fixtures/baseFixture';

test('Valid Login Test', async ({ loginPage, homePage }) => {

  await loginPage.goto();

  await loginPage.login('standard_user', 'secret_sauce');

  await homePage.verifyLoginSuccess();

});