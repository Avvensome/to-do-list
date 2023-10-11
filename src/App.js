import { useState } from "react";
import { Task } from "./components/Task";
import { CreateTask } from "./components/CreateTask";
import { Filters } from "./components/Filters";

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
	const handleRenderTasks = function () {
		return tasks.map((task, index) => (
			<Task
				key={index}
				taskText={task}
				handleDeleteTask={handleDeleteTask}
			/>
		));
	};
	const handleDeleteTask = function () {
		// const filtredTasks = tasks.filter((i) => i !== item);
		// handleRenderTasks(filtredTasks);
		console.log(tasks);
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
					{handleRenderTasks(tasks)}
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

export default App;
