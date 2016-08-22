import { Thread } from '../models/Thread';
import { Inject, Component } from '@angular/core';
import { AppStore } from '../app.store';
import { Store } from 'redux';
import {AppState} from '../reducers/index';
import {getAllThreads, getCurrentThread} from '../reducers/ThreadsReducer';
import { selectThread } from '../actions/ThreadActions';
import ChatThread from '../Components/ChatThread';

@Component({
    selector: 'chat-threads',
    directives: [ChatThread],
    template: `
        <!-- conversations -->
        <div class="row">
            <div class="conversation-wrap">
                <chat-thread
                    *ngFor="let thread of threads"
                    [thread]="thread"
                    [selected]="thread.id===currentThreadId"
                    (onThreadSelected)="handleThreadClicked($event)">
                </chat-thread>
            </div>
        </div>
    `
})
export default class ChatThreads {
    threads: Thread[];
    currentThreadId: string;

    constructor( @Inject(AppStore) private store: Store<AppState>) {
        store.subscribe(() => this.updateState());
        this.updateState();
    }

    updateState() {
        let state = this.store.getState();

        this.threads = getAllThreads(state);

        this.currentThreadId = getCurrentThread(state).id;
    }

    handleThreadClicked(thread: Thread) {
        this.store.dispatch(selectThread(thread));
    }
}