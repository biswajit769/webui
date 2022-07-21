import { HelpsModule } from './helps.module';

describe('HelpsModule', () => {
  let helpsModule: HelpsModule;

  beforeEach(() => {
    helpsModule = new HelpsModule();
  });

  it('should create an instance', () => {
    expect(helpsModule).toBeTruthy();
  });
});
