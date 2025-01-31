import { test, expect } from '@playwright/test';

test('Verificar o título da página inicial', async ({ page }) => {
  // Navega até a página inicial
  await page.goto('https://www.pcdiga.com');

  // Verifica se o título da página está correto
  await expect(page).toHaveTitle('Loja de Informática Nº1 em Portugal | PCDIGA');
});