const Api = (() => {
	const baseUrl = "https://jsonplaceholder.typicode.com";
	const todopath = "todos";

	const getTodos = () =>
		fetch([baseUrl, todopath].join("/")).then((response) =>
			response.json()
		);

	const deleteTodo = (id) =>
		fetch([baseUrl, todopath, id].join("/"), {
			method: "DELETE",
		});

	return { getTodos, deleteTodo };
})();

//* ~~~~~~~~~~~~~~~~~~~~ View
const View = (() => {
	const domstr = {
		todoContainer: "#todolist_container",
		deletebtn: ".delete-btn",
	};
	const render = (ele, tmp) => {
		ele.innerHTML = tmp;
	};
	const createTmp = (arr) => {
		let tmp = "";
		arr.forEach((ele) => {
			tmp += `
        <li>
          <span>${ele.id}-${ele.title}</span>
          <button id="${ele.id}" class="delete-btn">X</button>
        </li>
      `;
		});
		return tmp;
	};

	return { render, createTmp, domstr };
})();

//* ~~~~~~~~~~~~~~~~~~~~ Model
const Model = ((api, view) => {
	const { getTodos, deleteTodo } = api;
	class State {
		#todoslist = [];

		get todolist() {
			return this.#todoslist;
		}
		set todolist(newtodolist) {
			this.#todoslist = newtodolist;

			const todolistContainer = document.querySelector(
				view.domstr.todoContainer
			);
			const tmp = view.createTmp(this.#todoslist);
			view.render(todolistContainer, tmp);
		}
	}

	return { getTodos, deleteTodo, State };
})(Api, View);

//* ~~~~~~~~~~~~~~~~~~~~ Controller
const Controller = ((model, view) => {
	const state = new model.State();

	const deleteTodo = () => {
		const todolistContainer = document.querySelector(
			view.domstr.todoContainer
		);
		todolistContainer.addEventListener("click", (event) => {
			if (event.target.className === "delete-btn") {
				state.todolist = state.todolist.filter(
					(todo) => +todo.id !== +event.target.id
				);
        model.deleteTodo(event.target.id);
			}
		});
	};
  const addTodo = () => {}

	const init = () => {
		model.getTodos().then((todos) => {
			state.todolist = todos;
		});
	};

	const bootstrap = () => {
		init();
		deleteTodo();
	};

	return { bootstrap };
})(Model, View);

Controller.bootstrap();
