import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// Reducers
import todos_1_reducer from './todos-service/reducer';

const rootReducer = combineReducers({
	// Add other reducers
	todos_1Redux: todos_1_reducer,
});

const logger = createLogger({
	// ...options
});

// Configure redux
const composeEnhancers = compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk), applyMiddleware(logger)));
export type Store = ReturnType<typeof rootReducer>;
export default store;
