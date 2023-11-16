import puppeteer from "puppeteer";

async function navigateWebPage() {
  const browser = await puppeteer.launch({
    slowMo: 50,
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://app.morphcast.com/emotion-ai-video-frames-analyzer/#/");
  await page.click('button[id="openLicencePanel"]');
  const inputSelector = 'input[id="editlicenceKey"]';
  const textoAEscribir = "3afd07bfe6e9b3aed20a3ea33a4656b6cc83a134bedc";
  await page.type(inputSelector, textoAEscribir);
  await page.$eval('::-p-xpath(//*[@id="collapseLicence"]/div/div[3]/button[1])', button => button.click());
  const buttonSelector = '.btn.btn-secondary.col-3.orangeButtonSecondary.mx-2.controlBtn';
  await page.waitForSelector(buttonSelector);
  await page.click(buttonSelector);

  const openFileButtonSelector = '.btn.btn-primary.orangeButton[data-bs-dismiss="modal"]';
  await page.waitForSelector(openFileButtonSelector);
  await page.click(openFileButtonSelector);

  // Espera después de hacer clic en el botón para abrir el cuadro de diálogo de carga de archivos
  await new Promise((resolve) => setTimeout(resolve, 4000));

  const filePath = 'video.mp4';

  // Manejo del diálogo de carga de archivos
  page.on('filechooser', async (fileChooser) => {
    await fileChooser.accept([filePath]);
  });

 // await page.click('button[id="startAnalysis"]');
  
  await new Promise((resolve) => setTimeout(resolve, 4000));
  await browser.close();
}

navigateWebPage();