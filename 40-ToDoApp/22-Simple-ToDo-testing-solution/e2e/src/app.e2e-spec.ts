import { ToDoScreen } from './todo-screen.po';
import { browser, logging } from 'protractor';
import { By } from 'selenium-webdriver';
import { DoneScreen } from './done-screen.po';

describe('ToDo App', () => {
  let todoScreen: ToDoScreen;
  let doneScreen: DoneScreen;

  beforeEach(() => {
    todoScreen = new ToDoScreen();
    doneScreen = new DoneScreen();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });


  it('should add and complete an item', () => {
    const randomTitle = new Date().toISOString();
    todoScreen.navigateTo();
    const titleInput = todoScreen.getTitleInput();
    const addButton = todoScreen.getAddButton();
    titleInput.sendKeys(randomTitle);
    addButton.click();

    let lastItem = todoScreen.getToDoListItems().last();
    expect(lastItem.getText()).toContain(randomTitle);

    const completeButton = lastItem.all(By.className('remove-button'));

    expect(completeButton).not.toBeNull();
    completeButton.click();

    lastItem = todoScreen.getToDoListItems().last();
    expect(lastItem.getText()).not.toContain(randomTitle);

    doneScreen.navigateTo();
    lastItem = doneScreen.getDoneListItems().last();
    expect(lastItem.getText()).toContain(randomTitle);

    lastItem = doneScreen.getDoneListItems().last();
    const deleteButton = lastItem.all(By.className('remove-button'));
    deleteButton.click();
    lastItem = doneScreen.getDoneListItems().last();
    expect(lastItem.getText()).not.toContain(randomTitle);
  });
});
