import ReactDOM from 'react-dom';
import React from 'react';
import { profileReducer, sendPostActionCreator } from './profileReducer';
import App from '../../App';

it('new post should be added', () => {
  const action = sendPostActionCreator('new post text');
  const state = {
    posts: [
      { id: 1, post: 'Hello, how are you?', likes: 4 },
      { id: 2, post: 'Hello, i\'m fine', likes: 5 },
      { id: 3, post: 'empty line', likes: 1 },
      { id: 4, post: 'My girl, my girl don\'t lie to me, tell me where did you sleep last night, in the pines, in the pines where the sun don\'t ever shine, i would shiver the whole night through', likes: 1 },
    ],
  };

  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(5);
});
