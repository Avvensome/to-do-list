export const Filters = function ({ tasks, setTasks }) {
	const handleDeleteCompletedTasks = function () {
		const uncompletedTasks = tasks.filter((task) => !task.isCompleted);
		setTasks(uncompletedTasks);
	};
	return (
		<section className="task-filetr-items">
			<span className="items-filter">{`${tasks.length} items left`}</span>

			<div className="filters-btn">
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
			<span className="items-filter" onClick={handleDeleteCompletedTasks}>
				Clear Completed
			</span>
		</section>
	);
};
