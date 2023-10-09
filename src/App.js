function App() {
	// Odseparowanie title section od main
	// Zmiana w CSS backgground-image z body na header
	return (
		<main>
			<section className="title-section">
				<h1>todo</h1>
				<img src="/images/icon-moon.svg" alt="moon icon" />
			</section>
			<section className="create-task-section">
				<CreateTask />
			</section>
			<ul className="task-list-section">
				<Task />
			</ul>
		</main>
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
