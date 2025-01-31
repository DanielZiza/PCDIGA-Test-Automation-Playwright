import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Pasta onde estão os testes
  timeout: 30000, // Tempo limite para cada teste
  retries: 2, // Número de tentativas em caso de falha
  use: {
    headless: false, // Executar em modo headed (com navegador visível)
    screenshot: 'on', // Tirar screenshots automaticamente
    video: 'on', // Gravar vídeos automaticamente
  },
  reporter: [
    ['html', { outputFolder: 'playwright-report' }], // Relatório HTML
  ],
});