import { InvoicemanagementsystemModule } from './invoicemanagementsystem.module';

describe('InvoicemanagementsystemModule', () => {
  let invoicemanagementsystemModule: InvoicemanagementsystemModule;

  beforeEach(() => {
    invoicemanagementsystemModule = new InvoicemanagementsystemModule();
  });

  it('should create an instance', () => {
    expect(invoicemanagementsystemModule).toBeTruthy();
  });
});
