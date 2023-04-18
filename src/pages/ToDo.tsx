import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import AddTodo from '../components/organisms/AddTodo';
import TodoLists from '../components/organisms/TodoLists';

class ToDo extends Component {
	constructor(props: RouteComponentProps<any>) {
		super(props);
		this.state = {

		}
	}

	render(): React.ReactNode {
		return (
			<div>
				<AddTodo />
				<TodoLists />
			</div>
		)
	}
}

export default ToDo
