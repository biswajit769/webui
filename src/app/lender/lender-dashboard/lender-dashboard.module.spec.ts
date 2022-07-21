import { LenderDashboardModule } from './lender-dashboard.module';

describe('LenderDashboardModule', () => {
  let lenderDashboardModule: LenderDashboardModule;

  beforeEach(() => {
    lenderDashboardModule = new LenderDashboardModule();
  });

  it('should create an instance', () => {
    expect(lenderDashboardModule).toBeTruthy();
  });
});
