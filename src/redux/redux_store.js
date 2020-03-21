import { createStore, combineReducers } from 'redux';
import { profileReducer } from './profile_Reducer';
import { dialogsReducer } from './dialogs_Reducer';
import { sidebarReducer } from './sidebar_Reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,

});
export const store = createStore(reducers);
