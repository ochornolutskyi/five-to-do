import TODOS_1 from 'pages/TODOS_1';
import { useEffect, FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { getTodos_1 } from './redux/todos-service/actions';
import { selectorGetIsLoading } from 'redux/todos-service/selector';
import { Store } from 'redux/root';
import './App.scss';

const App: FC<Todos_1Props> = ({ isLoading, getTodos_1 }) => {
	useEffect(() => {
		getTodos_1();
	}, []);

	if (isLoading)
		return (
			<div className="App">
				<div>Loading...</div>
			</div>
		);
	return (
		<div className="App">
			<TODOS_1 />
		</div>
	);
};
const mapStateToProps = (store: Store) => ({
	isLoading: selectorGetIsLoading(store),
});

const mapDispatchToProps = {
	getTodos_1,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type Todos_1Props = ConnectedProps<typeof connector>;

export default connector(App);
