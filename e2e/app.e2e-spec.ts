import { Angular5Page } from './app.po';

describe('angular5 App', () => {
  let page: Angular5Page;

  beforeEach(() => {
    page = new Angular5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
