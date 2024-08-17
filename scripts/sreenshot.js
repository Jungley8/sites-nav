const puppeteer = require('puppeteer');

(async () => {
    // 启动浏览器
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // 导航到Docusaurus网站
    await page.goto('http://localhost:3000'); // 将此替换为你Docusaurus站点的URL

    // 设置屏幕尺寸
    await page.setViewport({ width: 1280, height: 800 });

    // 截取整个页面的截图
    await page.screenshot({ path: 'docusaurus-screenshot.png', fullPage: true });

    // 关闭浏览器
    await browser.close();
})();
