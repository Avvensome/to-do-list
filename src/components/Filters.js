import { Task } from "./Task";
export const Filters = function ({
	tasks,
	setTasks,
	filter,
	setFilter,
	handleDelteTask,
	handleToogleTaskCompleted,
}) {
	const handleDeleteCompletedTasks = function () {
		const uncompletedTasks = tasks.filter((task) => !task.isCompleted);
		setTasks(uncompletedTasks);
	};
	const filtredTasks = tasks.filter((task) => {
		if (filter === "completed") return task.isCompleted;
		if (filter === "uncompleted") return !task.isCompleted;
		return true;
	});
	const test = filtredTasks.map((task, index) => (
		<Task
			taskText={task.text}
			id={task.id}
			isCompleted={task.isCompleted}
			key={index}
			handleDelteTask={handleDelteTask}
			handleToogleTaskCompleted={handleToogleTaskCompleted}
			filter={filter}
			setFilter={setFilter}
		/>
	));
	return (
		<section className="task-filetr-items">
			<span className="items-filter">{`${tasks.length} items left`}</span>

			<div className="filters-btn">
				<button onClick={() => setFilter("all")}>All</button>
				<button onClick={() => setFilter("uncompleted")}>Active</button>
				<button onClick={() => setFilter("completed")}>
					Completed
				</button>
			</div>
			<span className="items-filter" onClick={handleDeleteCompletedTasks}>
				Clear Completed
			</span>
		</section>
	);
};
