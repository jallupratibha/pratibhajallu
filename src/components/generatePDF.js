const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set viewport size to ensure full hero section visibility
    await page.setViewport({ width: 1440, height: 1200 });

    await page.goto('https://pratibhajallu.vercel.app/', { waitUntil: 'networkidle2' });

    // ⏳ Wait for animations (including hero section dots) to complete
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Scroll to hero section to ensure all elements (dots) are visible
    await page.evaluate(() => {
        document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Wait extra time for hero section to stabilize
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Scroll to bottom for footer visibility
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    // Wait for bottom nav to appear
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Get full page height after all elements load
    const height = await page.evaluate(() => document.documentElement.scrollHeight);

    await page.pdf({
        path: 'portfolio.pdf',
        format: 'A4',
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: `
            <div style="font-size: 14px; font-weight: bold; text-align: center; width: 100%;">
                <span style="color: #333;">🏠 <a href='https://pratibhajallu.vercel.app/' style='text-decoration: none; color: inherit;'>Pratibha Jallu | Portfolio</a></span>
            </div>
        `,
        footerTemplate: `
            <div style="font-size: 12px; text-align: center; width: 100%;">
                <span style="color: #666;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
            </div>
        `,
        margin: { top: "60px", bottom: "40px" } // Ensures space for the nav at the top
    });

    await browser.close();
    console.log("✅ PDF saved with top nav on every page!");
})();
