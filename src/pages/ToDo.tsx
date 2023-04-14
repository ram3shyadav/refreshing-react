import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import AddTodo from '../components/organisms/AddTodo';

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
				<h1>Todo Page</h1>
				<p>This is the about page of my app.</p>
			</div>
		)
	}
}

export default ToDo
