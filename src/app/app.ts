import { Component, Inject} from '@angular/core';
import { Store } from 'redux';
import { AppStore } from './app.store';
import { AppState } from './reducers/index';
import ChatExampleData from './ChatExampleData';
import ChatPage  from './page/ChatPage';
require('../../public/resources/css/styles.scss');

@Component({
  selector: 'my-app',
  directives: [ChatPage],
  template: `
    <div>
      <chat-page></chat-page>
    </div>
  `
})
export class AppComponent {
  constructor(@Inject(AppStore) private store:Store<AppState>){
    ChatExampleData(store);
  }
}