import { createAction } from '@ngrx/store';

export const setOnlineStatus = createAction('[Online Status] Set Online Status', (isOnline: boolean) => ({ isOnline }));
