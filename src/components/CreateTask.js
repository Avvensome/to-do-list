export const CreateTask = function ({
	setInputValue,
	inputValue,
	handleAddTask,
}) {
	return (
		<form className="create-task-container" onSubmit={handleAddTask}>
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
