import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function TodoLists() {
	const todos = useSelector((state: RootState) => state.todoReducer.todos); // use RootState type
	return !todos.length ? (null) : (
		<table className="table table-bordered">
			<thead>
				<tr>
					<th style={{ width: "10%" }}>
						{/* <input
							type={"checkbox"}
							onChange={(e) => changeEvent(e)}
							name={"select_all_todo"}
						/> */}
					</th>
					<th style={{ width: "60%" }}>Title</th>
					<th style={{ width: "30%" }}>Action</th>
				</tr>
			</thead>
			<tbody>
				{todos.map((todo, index) => (
					<tr key={index}>
						<td></td>
						<td>{todo?.title}</td>
						<td>
							<button
								className="btn btn-primary btn-sm">
								Edit
							</button>
							&nbsp;
							<button
								className="btn btn-secondary btn-sm">
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
		// <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
		// 	<ul className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
		// 	{todos.map((todo) => (
		// 		<li className="flex mb-4 items-center">
		// 			<p className="w-full text-grey-darkest">{todo.title}</p>
		// 		</li>
		// 	))}

		// 	</ul>
		// </div>
		// <ul className="bg-white divide-y divide-gray-200">
		// 	{todos.map((todo) => (
		// 		<li key={todo.id} className="px-4 py-4 sm:px-6">
		// 			<div className="flex items-center justify-between">
		// 				<p className="text-lg font-medium text-gray-900">{todo.title}</p>
		// 				<button
		// 					type="button"
		// 					className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
		// 					onClick={() => console.log(`Delete ${todo.title}`)}
		// 				>
		// 					Delete
		// 				</button>
		// 			</div>
		// 			<p className="mt-1 text-sm text-gray-500">{todo.description}</p>
		// 		</li>
		// 	))}
		// </ul>
	);
}

export default TodoLists;
