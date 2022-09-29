const Api = (() => {
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

//* ~~~~~~~~~~~~~~~~~~~~ View
const View = (() => {
	const domstr = {
		todoContainer: "#todolist_container",
		deletebtn: ".delete-btn",
		inputbox: ".todolist__input",
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
	const { getTodos, deleteTodo, addTodo } = api;

	class Todo {
		constructor(title) {
			this.userId = 5;
			this.title = title;
			this.completed = false;
		}
	}
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

	return { getTodos, deleteTodo, addTodo, State, Todo };
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
	const addTodo = () => {
		const inputbox = document.querySelector(view.domstr.inputbox);

		inputbox.addEventListener("keyup", (event) => {
			if (event.key === "Enter" && event.target.value.trim() !== '') {
				const newTodo = new model.Todo(
					event.target.value
				);

				model.addTodo(newTodo).then((todo) => {
					state.todolist = [todo, ...state.todolist];
				});

        event.target.value = '';
			}
		});
	};

	const init = () => {
		model.getTodos().then((todos) => {
			state.todolist = todos.reverse();
		});
	};

	const bootstrap = () => {
		init();
		deleteTodo();
		addTodo();
	};

	return { bootstrap };
})(Model, View);

Controller.bootstrap();
