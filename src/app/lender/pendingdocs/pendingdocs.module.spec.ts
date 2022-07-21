import { PendingdocsModule } from './pendingdocs.module';

describe('PendingdocsModule', () => {
  let pendingdocsModule: PendingdocsModule;

  beforeEach(() => {
    pendingdocsModule = new PendingdocsModule();
  });

  it('should create an instance', () => {
    expect(pendingdocsModule).toBeTruthy();
  });
});
