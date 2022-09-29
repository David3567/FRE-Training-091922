export const Api = (() => {
	// const baseUrl = "https://jsonplaceholder.typicode.com";
  const baseUrl = 'http://localhost:4232';
	const todopath = "todos";

	const getTodos = () =>
		fetch([baseUrl, todopath].join("/")).then((response) =>
			response.json()
		);

	const deleteTodo = (id) =>
		fetch([baseUrl, todopath, id].join("/"), {
			method: "DELETE",
		});

	const addTodo = (newtodo) =>
		fetch([baseUrl, todopath].join("/"), {
			method: "POST",
			body: JSON.stringify(newtodo),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}).then((response) => response.json());

	return { getTodos, deleteTodo, addTodo };
})();