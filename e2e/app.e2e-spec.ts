import { SistemaEcommerceCliPage } from './app.po';

describe('sistema-ecommerce-cli App', function() {
  let page: SistemaEcommerceCliPage;

  beforeEach(() => {
    page = new SistemaEcommerceCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
