import React, {useState, useEffect, useRef} from 'react';
import Todo from './Todo';


function TodoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : '' );

	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	})

	const handleChange = event => {
		setInput(event.target.value);
	}

	const handleSubmit = event => {
		event.preventDefault();
		props.onSubmit({
			id: Math.floor(Math.random()*10000),
			text: input
		});

		setInput("");

	};

	return (
		<form className="todo-form" onSubmit={handleSubmit}	>
		{props.edit ? (
			<div>
			<input 
				type="text" 
				placeholder="Update item"
				value={input}
				name="text"
				className="todo-input edit"
				onChange={handleChange}
				ref={inputRef}
			/>
			<button className="todo-button edit">Update</button>
			</div>
			) : (
			<div>
			<input 
				type="text" 
				placeholder="Write New Todo"
				value={input}
				name="text"
				className="todo-input "
				onChange={handleChange}
				ref={inputRef}
			/>
			<button className="todo-button">Add</button>
			</div>
			)}
		</form>
	)
}

export default TodoForm;