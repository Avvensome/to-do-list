function App() {
	let tasks = [1];
	return (
		<>
			<header>
				<section className="title-section">
					<h1>todo</h1>
					<img src="/images/icon-moon.svg" alt="moon icon" />
				</section>
			</header>
			<main>
				<section className="create-task-section">
					<CreateTask />
				</section>
				<ul className="task-list-section">
					{tasks.length >= 1 ? <Filters /> : ""}
				</ul>
				{tasks.length >= 1 ? (
					<p className="description-text">
						Drag and drop to render list
					</p>
				) : (
					<p className="decsription-text-start">
						Add something to list
					</p>
				)}
			</main>
		</>
	);
}
const CreateTask = function () {
	return (
		<div className="create-task-container">
			<input
				className="create-task-input"
				type="text"
				placeholder="Create a new todo..."
			/>
			<div className="create-task-circle"></div>
		</div>
	);
};

const Task = function () {
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
					Complete JavaScript course
				</label>
			</div>
		</li>
	);
};

const Filters = function () {
	return (
		<section className="task-filetr-items">
			<span className="items-filter">5 items left</span>

			<div className="filters-btn">
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
			<span className="items-filter">Clear Completed</span>
		</section>
	);
};
export default App;
