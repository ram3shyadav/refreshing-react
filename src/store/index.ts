import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunkMiddleware from "redux-thunk";

import rootReducer from './reducers'

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunkMiddleware)
		// other store enhancers if any
	)
)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;

