import { browser, by, element } from 'protractor';

export class ToDoScreen {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleInput() {
    return element(by.css('input'));
  }
  getAddButton() {
    return element(by.css('#add-button'));
  }
  getToDoList() {
    return element(by.css('.todo-list'));
  }
  getToDoListItems() {
    return element.all(by.css('.todo-list li'));
  }
}
