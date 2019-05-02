import { browser, by, element } from 'protractor';

export class DoneScreen {
  navigateTo() {
    return browser.get(browser.baseUrl + '/done') as Promise<any>;
  }

  getDoneListItems() {
    return element.all(by.css('.todo-list li'));
  }
}
