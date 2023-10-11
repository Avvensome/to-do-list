export const Task = function ({ taskText }) {
	return (
		<li className="task-component">
			<div>
				<input
					className="task-checkbox"
					type="checkbox"
					id="test"
					name="task"
				/>
				<label for="id-test" className="task-text">
					{taskText}
				</label>
			</div>
			<img src="/images/icon-cross.svg" alt="remove task" />
		</li>
	);
};
