import { Reducer, combineReducers } from 'redux';
import { ThreadsState, ThreadsReducer } from './ThreadsReducer';
import { UsersState, UsersReducer } from './UsersReducer';

export interface AppState {
    users: UsersState;
    threads: ThreadsState;
}

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    users: UsersReducer,
    threads: ThreadsReducer
});