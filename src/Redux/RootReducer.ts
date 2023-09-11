import { combineReducers } from 'redux';
import { globalReducer } from '@/Redux/Global/reducer';

export const rootReducer = combineReducers({
    global: globalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
