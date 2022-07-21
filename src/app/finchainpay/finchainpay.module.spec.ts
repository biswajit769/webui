import { FinchainpayModule } from './finchainpay.module';

describe('FinchainpayModule', () => {
  let finchainpayModule: FinchainpayModule;

  beforeEach(() => {
    finchainpayModule = new FinchainpayModule();
  });

  it('should create an instance', () => {
    expect(finchainpayModule).toBeTruthy();
  });
});
