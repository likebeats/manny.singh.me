import { Mannysingh.MePage } from './app.po';

describe('mannysingh.me App', () => {
  let page: Mannysingh.MePage;

  beforeEach(() => {
    page = new Mannysingh.MePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
