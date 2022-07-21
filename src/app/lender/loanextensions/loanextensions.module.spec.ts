import { LoanextensionsModule } from './loanextensions.module';

describe('LoanextensionsModule', () => {
  let loanextensionsModule: LoanextensionsModule;

  beforeEach(() => {
    loanextensionsModule = new LoanextensionsModule();
  });

  it('should create an instance', () => {
    expect(loanextensionsModule).toBeTruthy();
  });
});
