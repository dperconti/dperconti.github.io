import { YourAngularProjectPage } from './app.po';

describe('your-angular-project App', () => {
  let page: YourAngularProjectPage;

  beforeEach(() => {
    page = new YourAngularProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
