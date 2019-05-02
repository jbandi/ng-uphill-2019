import { AppPage } from './app.po';

describe('ToDo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Simplistic ToDo');
  });
});
