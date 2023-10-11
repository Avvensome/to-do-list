function App() {
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
					<Task />
					<Task />
					<Task />
				</ul>
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

export default App;
