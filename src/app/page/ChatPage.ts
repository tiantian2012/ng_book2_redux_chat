import { Component } from '@angular/core';
import ChatNavBar from '../containers/ChatNavBar';
import ChatThreads from '../containers/ChatThreads';
import ChatWindow from '../containers/ChatWindow';

@Component({
    selector:'chat-page',
    directives:[
        ChatNavBar,
        ChatThreads,
        ChatWindow
    ],
    template:`
        <div>
            <chat-nav-bar></chat-nav-bar>
            <div class='container'>
                <chat-threads></chat-threads>
                <chat-window></chat-window>
            </div>
        </div>
    `
})
export default class ChatPage{

}