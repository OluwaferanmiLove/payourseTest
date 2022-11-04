describe('FlowTest', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have coins screen', async () => {
    await expect(element(by.id('coins-screen'))).toBeVisible();
  });

  it('should show header', async () => {
    await expect(element(by.id('header'))).toBeVisible();
    await expect(element(by.id('header-search-btn'))).toBeVisible();
  });

  it('should show search input', async () => {
    await element(by.id('header-search-btn')).tap();
    await expect(element(by.id('search-input'))).toBeVisible();
  });

  it('should allow input', async () => {
    await element(by.id('input')).typeText('btc');
    await expect(element(by.id('search-input'))).toBeVisible();
  });

  it('should show payourse header after input close', async () => {
    await element(by.id('close-input-btn')).tap();
    await expect(element(by.id('header'))).toBeVisible();
  });

  it('should show coin rates screen after tap', async () => {
    await element(by.id('BTC')).tap();
    await expect(element(by.id('coin-rate-screen'))).toBeVisible();
  });

  it('should go back to coins screen after tap', async () => {
    await element(by.id('back-btn')).tap();
    await expect(element(by.id('coins-screen'))).toBeVisible();
  });
});
