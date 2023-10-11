export const Filters = function ({ tasks }) {
	return (
		<section className="task-filetr-items">
			<span className="items-filter">{`${tasks.length} items left`}</span>

			<div className="filters-btn">
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
			<span className="items-filter">Clear Completed</span>
		</section>
	);
};
