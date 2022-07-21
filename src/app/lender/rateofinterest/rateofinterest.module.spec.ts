import { RateofinterestModule } from './rateofinterest.module';

describe('RateofinterestModule', () => {
  let rateofinterestModule: RateofinterestModule;

  beforeEach(() => {
    rateofinterestModule = new RateofinterestModule();
  });

  it('should create an instance', () => {
    expect(rateofinterestModule).toBeTruthy();
  });
});
