import { RedditImitationPage } from './app.po';

describe('reddit-imitation App', function() {
  let page: RedditImitationPage;

  beforeEach(() => {
    page = new RedditImitationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
