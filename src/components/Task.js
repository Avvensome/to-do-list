export const Task = function ({
	taskText,
	handleDelteTask,
	id,
	isCompleted,
	handleToogleTaskCompleted,
}) {
	return (
		<li className="task-component">
			<div>
				<input
					className="task-checkbox"
					type="checkbox"
					name="task"
					checked={isCompleted}
					onChange={() => handleToogleTaskCompleted(id)}
					htmlFor={id}
				/>
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
