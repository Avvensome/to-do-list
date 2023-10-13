import { useState } from "react";
import { Task } from "./components/Task";
import { CreateTask } from "./components/CreateTask";
import { Filters } from "./components/Filters";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [tasks, setTasks] = useState([]);
	const [filter, setFilter] = useState("all");

	const handleAddTask = function (e) {
		e.preventDefault();
		if (inputValue.trim() === "") return;

		const newTask = {
			text: inputValue,
			id: Date.now(),
			isComplited: false,
		};

		setTasks((prevList) => [...prevList, newTask]);
		setInputValue("");
	};
	const handleDelteTask = function (taskID) {
		const updatedTaskList = tasks.filter((task) => task.id !== taskID);
		setTasks(updatedTaskList);
	};
	const handleToogleTaskCompleted = function (id) {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id
					? { ...task, isCompleted: !task.isCompleted }
					: task
			)
		);
	};
	const handleRenderTasks = function () {
		return tasks.map((task, index) => (
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
						AddTask={handleAddTask}
						inputValue={inputValue}
					/>
				</section>
				<ul className="task-list-section">
					{handleRenderTasks(tasks)}
					{tasks.length >= 1 ? (
						<Filters
							tasks={tasks}
							setTasks={setTasks}
							filter={filter}
							setFilter={setFilter}
							handleAddTask={handleAddTask}
							handleDelteTask={handleDelteTask}
							handleToogleTaskCompleted={
								handleToogleTaskCompleted
							}
						/>
					) : (
						""
					)}
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
