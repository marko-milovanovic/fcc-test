import {
	Action, AnyAction, createStore, applyMiddleware, compose,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';
import reducer from './reducer';

const store = createStore(
	reducer,
	process.env.NODE_ENV !== 'production'
		? composeWithDevTools(applyMiddleware(thunk))
		: compose(applyMiddleware(thunk))
);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkAction<R, S, E, A extends Action> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
