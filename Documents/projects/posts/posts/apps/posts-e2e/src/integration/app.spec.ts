import { getPosts } from '../support/app.po';

describe('posts', () => {
  beforeEach(() => cy.visit('/'));

  it('should display posts', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    // getGreeting().contains('Welcome posts');
    getPosts().should((t) => expect(t.length).equal(100));
  });
});
