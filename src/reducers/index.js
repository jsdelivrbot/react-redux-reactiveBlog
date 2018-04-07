import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import PostsReducer from './reducerPosts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: FormReducer,
});

export default rootReducer;
