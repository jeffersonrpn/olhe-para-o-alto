import { OlheParaOAltoPage } from './app.po';

describe('olhe-para-o-alto App', () => {
  let page: OlheParaOAltoPage;

  beforeEach(() => {
    page = new OlheParaOAltoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
