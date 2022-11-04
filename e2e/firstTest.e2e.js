describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have coins screen', async () => {
    await expect(element(by.id('coins-screen'))).toBeVisible();
  });

  it('should show coin rates screen after tap', async () => {
    await element(by.id('BTC')).tap();
    await expect(element(by.id('coin-rate-screen'))).toBeVisible();
  });
});
