import { LoanrequestModule } from './loanrequest.module';

describe('LoanrequestModule', () => {
  let loanrequestModule: LoanrequestModule;

  beforeEach(() => {
    loanrequestModule = new LoanrequestModule();
  });

  it('should create an instance', () => {
    expect(loanrequestModule).toBeTruthy();
  });
});
