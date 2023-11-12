import { combineReducers } from 'redux';
import { globalReducer } from '@/Redux/Global/reducer';
import { userReducer } from '@/Redux/User/reducer';

export const rootReducer = combineReducers({
   global: globalReducer,
   user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
