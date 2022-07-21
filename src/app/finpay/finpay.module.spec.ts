import { FinpayModule } from './finpay.module';

describe('FinpayModule', () => {
  let finpayModule: FinpayModule;

  beforeEach(() => {
    finpayModule = new FinpayModule();
  });

  it('should create an instance', () => {
    expect(finpayModule).toBeTruthy();
  });
});
