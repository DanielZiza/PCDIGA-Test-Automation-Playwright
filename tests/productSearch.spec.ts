import { test, expect } from '@playwright/test';

test('Aceitar primeiro os cookies e pesquisar por um produto', async ({ page }) => {

  await page.goto('https://www.pcdiga.com');

  const cookieButton = page.locator('button.ch2-btn.ch2-allow-all-btn.ch2-btn-primary');
  if (await cookieButton.isVisible()) {
    await cookieButton.click();
  }

  // Preenche o campo de pesquisa com "Placa Gráfica"
  await page.fill('input[name="query"]', 'Placa Gráfica');
  await page.press('input[name="query"]', 'Enter');


  // Verifica se a página de resultados foi carregada
  await expect(page).toHaveURL(/search?/); // Verifica se a URL contém "search"
  
// Espera até que os produtos sejam carregados
await page.waitForSelector('a.mt-1 h3');

// Verifica se há resultados
const productCards = page.locator('a.mt-1 h3');
if (await productCards.count() > 0) {
  await expect(productCards.first()).toContainText('Placa Gráfica');
} else {
  console.log('Nenhum resultado encontrado para "Placa Gráfica".');
}

});