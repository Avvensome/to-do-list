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

export default App;
