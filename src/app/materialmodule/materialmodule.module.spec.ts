import { MaterialmoduleModule } from './materialmodule.module';

describe('MaterialmoduleModule', () => {
  let materialmoduleModule: MaterialmoduleModule;

  beforeEach(() => {
    materialmoduleModule = new MaterialmoduleModule();
  });

  it('should create an instance', () => {
    expect(materialmoduleModule).toBeTruthy();
  });
});
