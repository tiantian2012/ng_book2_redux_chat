import { User } from '../models/User';
import { Action } from 'redux';
import { SET_CURRENT_USER, SetCurrentUserAction } from '../actions/UserActions';
import { createSelector } from 'reselect';


export interface UsersState {
    currentUser: User;
};

const initialState: UsersState = {
    currentUser: null
};

export const UsersReducer =
    function (state: UsersState = initialState, action: Action): UsersState {
        switch (action.type) {
            case SET_CURRENT_USER:
                const user: User = (<SetCurrentUserAction>action).user;
                return {
                    currentUser: user
                };
            default:
                return state;
        }
    };

export const getUsersState = (state: any): UsersState => state.users;

export const getCurrentUser = createSelector(
    getUsersState,
    (state: UsersState) => state.currentUser);