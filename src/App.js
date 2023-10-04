function App() {
	return (
		<main>
			<section className="title-section">
				<h1>todo</h1>
				<img src="/images/icon-moon.svg" alt="moon icon" />
			</section>
			<section className="task-section">
				<CreateTask />
			</section>
			<section className="task-list-section"></section>
		</main>
	);
}
const CreateTask = function () {
	return (
		<div className="task-container">
			<input
				className="task-input"
				type="text"
				placeholder="Create a new todo..."
			/>
			<div className="task-circle"></div>
		</div>
	);
};
export default App;
