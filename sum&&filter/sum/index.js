// ~~~~~~~~~~~~~View~~~~~~~~~~~~~
const View = (() => {
	const domstr = {
		tablebody: "#table__body",
	};
	const render = (element, tmp) => {
		element.innerHTML = tmp;
	};
	const createTmp = (arr) => {
		let tmp = "";
		arr.forEach((ele) => {
			tmp += `              
            <tr>
                <td>${ele.region}</td>
                <td>${ele.model}</td>
                <td>${ele.sales}</td>
            </tr>
          `;
		});
		return tmp;
	};
	return {
		domstr,
		render,
		createTmp,
	};
})();
// ~~~~~~~~~~~~~Model~~~~~~~~~~~~~
const Model = (() => {
	const data = [
		{ region: "US", model: "A", sales: 150 },
		{ region: "US", model: "B", sales: 120 },
		{ region: "US", model: "C", sales: 350 },
		{ region: "EU", model: "A", sales: 200 },
		{ region: "EU", model: "B", sales: 100 },
		{ region: "EU", model: "C", sales: 250 },
		{ region: "CA", model: "A", sales: 200 },
		{ region: "CA", model: "B", sales: 100 },
		{ region: "CA", model: "C", sales: 230 },
		{ region: "CA", model: "D", sales: 400 },
		{ region: "JA", model: "A", sales: 10 },
		{ region: "JA", model: "B", sales: 110 },
	];
	const createNewArr = (data) => {
		const map = {};
		data.forEach((ele) => {
			if (!map[ele.region]) {
				const total = {
					region: ele.region,
					model: "sum",
					sales: ele.sales,
				};
				map[ele.region] = [total];
				map[ele.region].push(ele);
			} else {
				map[ele.region].push(ele);
				map[ele.region][0].sales += ele.sales;
			}
		});

		return Object.values(map).reduce((acc, cur) => {
			console.log(cur);
			return [...acc, ...cur];
		}, []);
	};
	return {
		data,
		createNewArr,
	};
})();
// ~~~~~~~~~~~~~Controler~~~~~~~~~~~~~
const Controler = ((view, model) => {
	const init = () => {
		const tablebody = document.querySelector(view.domstr.tablebody);
		const newArr = model.createNewArr(model.data);
		const tmp = view.createTmp(newArr);

		view.render(tablebody, tmp);
	};

	return { init };
})(View, Model);
Controler.init();
