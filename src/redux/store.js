import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
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
  form: formReducer,
});
export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
