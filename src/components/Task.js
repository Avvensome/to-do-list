export const Task = function ({ taskText, handleDelteTask, id }) {
	return (
		<li className="task-component">
			<div>
				<input className="task-checkbox" type="checkbox" name="task" />
				<label className="task-text" htmlFor={id}>
					{taskText}
				</label>
			</div>
			<img
				src="/images/icon-cross.svg"
				alt="remove task"
				onClick={() => handleDelteTask(id)}
			/>
		</li>
	);
};
