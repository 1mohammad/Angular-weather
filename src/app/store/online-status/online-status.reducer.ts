import { createReducer, on } from '@ngrx/store';
import { setOnlineStatus } from './online-status.actions';

export interface OnlineStatusState {
  isOnline: boolean;
}

export const initialState: OnlineStatusState = {
  isOnline: true,
};

export const onlineStatusReducer = createReducer(
  initialState,
  on(setOnlineStatus, (state, { isOnline }) => ({ ...state, isOnline }))
);
