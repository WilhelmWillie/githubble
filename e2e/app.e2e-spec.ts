import { GithubblePage } from './app.po';

describe('githubble App', () => {
  let page: GithubblePage;

  beforeEach(() => {
    page = new GithubblePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
