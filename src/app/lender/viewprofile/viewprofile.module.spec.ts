import { ViewprofileModule } from './viewprofile.module';

describe('ViewprofileModule', () => {
  let viewprofileModule: ViewprofileModule;

  beforeEach(() => {
    viewprofileModule = new ViewprofileModule();
  });

  it('should create an instance', () => {
    expect(viewprofileModule).toBeTruthy();
  });
});
