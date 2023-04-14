import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { addNewTodo } from '../../store/todo/todo.actions'

class AddTodo extends React.Component<{addNewTodo: any}, {values: {}}> {
	private formRef: HTMLFormElement | undefined = undefined;
	constructor(props: any) {
		super(props)
		// this.handleSubmit.bind(this.handleSubmit)
		this.state = {
			values: {}
		}
	}

	changeEvent = (event: React.ChangeEvent<any>) => {
		this.setState((prevState) => ({
			values: {
				...prevState.values,
				[event.target.name]: event.target.value
			}
		}));
	}

	handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { addNewTodo } = this.props;
		// let formData = new FormData(event.target as any);
		// formData = new FormData(this.formRef);
		console.log(this.state.values)
		addNewTodo(this.state.values as any);
	}

	render() {
		return (
			<div className="max-w-md mx-auto">
				<form ref={f => this.formRef = f as HTMLFormElement} onSubmit={this.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
					<div className="mb-4">
						<label className="block text-gray-700 font-bold mb-2">
							Name
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								name="title"
								type="text"
								onChange={this.changeEvent}
								placeholder="Enter your name"
							/>
						</label>
					</div>
					<div className="mb-6">
						<label className="block text-gray-700 font-bold mb-2">
							Description
							<textarea
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								name="description"
								onChange={this.changeEvent}
								placeholder="Enter your description"
							/>
						</label>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default connect(null, {addNewTodo})(AddTodo)
