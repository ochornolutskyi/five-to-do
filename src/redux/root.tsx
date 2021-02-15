import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// Reducers
import todos_reducer from './todos-service/reducer';

const rootReducer = combineReducers({
	// Add other reducers
	todosRedux: todos_reducer,
});

// Configure redux
const composeEnhancers = compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export type Store = ReturnType<typeof rootReducer>;
export default store;
