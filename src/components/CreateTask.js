export const CreateTask = function ({ setInputValue, inputValue, AddTask }) {
	return (
		<form className="create-task-container" onSubmit={AddTask}>
			<input
				className="create-task-input"
				type="text"
				placeholder="Create a new todo..."
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
			/>
			<div className="create-task-circle"></div>
		</form>
	);
};
