import { InvoicesystemadminModule } from './invoicesystemadmin.module';

describe('InvoicesystemadminModule', () => {
  let invoicesystemadminModule: InvoicesystemadminModule;

  beforeEach(() => {
    invoicesystemadminModule = new InvoicesystemadminModule();
  });

  it('should create an instance', () => {
    expect(invoicesystemadminModule).toBeTruthy();
  });
});
