import { createStore, combineReducers } from 'redux';
import { profileReducer } from './reducers/profileReducer';
import { dialogsReducer } from './reducers/dialogsReducer';
import { sidebarReducer } from './reducers/sidebarReducer';
import { usersReducer } from './reducers/usersReducer';
import { authReducer } from './reducers/auth_reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,

});
export const store = createStore(reducers);

window.store = store;
