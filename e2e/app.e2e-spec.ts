import { TodoAppV1Page } from './app.po';

describe('todo-app-v1 App', function() {
  let page: TodoAppV1Page;

  beforeEach(() => {
    page = new TodoAppV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
