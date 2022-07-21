import { LoanhistoryModule } from './loanhistory.module';

describe('LoanhistoryModule', () => {
  let loanhistoryModule: LoanhistoryModule;

  beforeEach(() => {
    loanhistoryModule = new LoanhistoryModule();
  });

  it('should create an instance', () => {
    expect(loanhistoryModule).toBeTruthy();
  });
});
