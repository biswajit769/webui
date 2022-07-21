import { BorrowerremarksModule } from './borrowerremarks.module';

describe('BorrowerremarksModule', () => {
  let borrowerremarksModule: BorrowerremarksModule;

  beforeEach(() => {
    borrowerremarksModule = new BorrowerremarksModule();
  });

  it('should create an instance', () => {
    expect(borrowerremarksModule).toBeTruthy();
  });
});
