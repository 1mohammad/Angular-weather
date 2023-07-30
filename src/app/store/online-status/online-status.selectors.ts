import { createSelector, createFeatureSelector } from '@ngrx/store';
import { OnlineStatusState } from './online-status.reducer';

export const selectOnlineStatusState = createFeatureSelector<OnlineStatusState>('onlineStatus');

export const selectIsOnline = createSelector(
  selectOnlineStatusState,
  (state: OnlineStatusState) => state.isOnline
);