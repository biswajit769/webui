import { TodayduesModule } from './todaydues.module';

describe('TodayduesModule', () => {
  let todayduesModule: TodayduesModule;

  beforeEach(() => {
    todayduesModule = new TodayduesModule();
  });

  it('should create an instance', () => {
    expect(todayduesModule).toBeTruthy();
  });
});
