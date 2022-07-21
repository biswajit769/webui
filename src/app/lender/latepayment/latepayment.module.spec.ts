import { LatepaymentModule } from './latepayment.module';

describe('LatepaymentModule', () => {
  let latepaymentModule: LatepaymentModule;

  beforeEach(() => {
    latepaymentModule = new LatepaymentModule();
  });

  it('should create an instance', () => {
    expect(latepaymentModule).toBeTruthy();
  });
});
