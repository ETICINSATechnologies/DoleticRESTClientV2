import { DoleticRESTClientV2Page } from './app.po';

describe('doletic-restclient-v2 App', () => {
  let page: DoleticRESTClientV2Page;

  beforeEach(() => {
    page = new DoleticRESTClientV2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
