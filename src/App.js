import { useState } from "react";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [tasks, setTasks] = useState([]);

	const handleAddTask = function (e) {
		if (inputValue.trim() !== "") {
			e.preventDefault();
			const newTask = [...tasks, inputValue];
			setTasks(newTask);

			setInputValue("");
		} else {
			e.preventDefault();
		}
	};
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
					<CreateTask
						setInputValue={setInputValue}
						handleAddTask={handleAddTask}
						inputValue={inputValue}
					/>
				</section>
				<ul className="task-list-section">
					{tasks.map((task, index) => (
						<Task key={index} taskText={task} />
					))}
					{tasks.length >= 1 ? <Filters tasks={tasks} /> : ""}
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
const CreateTask = function ({ setInputValue, inputValue, handleAddTask }) {
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

const Task = function ({ taskText }) {
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

const Filters = function ({ tasks }) {
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
export default App;
