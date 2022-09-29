// ~~~~~~~~~~~~~View~~~~~~~~~~~~~
const View = (() => {
    const domstr = {
        tablebody: '#table__body',
        region: '#region',
        model: '#model'
    };
    const render = (element, tmp) => {
        element.innerHTML = tmp;
    }
    const createDropDownTmp = arr => {
        let tmp = '<option selected>All</option>';
        arr.forEach(ele => {
            tmp += `              
                <option>${ele}</option>
            `;
        });
        return tmp;
    }
    const createTableBodyTmp = arr => {
        let tmp = '';
        arr.forEach(ele => {
            tmp += `              
                <tr>
                    <td>${ele.region}</td>
                    <td>${ele.model}</td>
                    <td>${ele.sales}</td>
                </tr>
            `;
        });
        return tmp;
    }
    return {
        domstr,
        render,
        createDropDownTmp,
        createTableBodyTmp
    }
})();
// ~~~~~~~~~~~~~Model~~~~~~~~~~~~~
const Model = (view => {
    const data = [
        { region: 'US', model: 'A', sales: 150 },
        { region: 'US', model: 'B', sales: 120 },
        { region: 'US', model: 'C', sales: 350 },
        { region: 'EU', model: 'A', sales: 200 },
        { region: 'EU', model: 'B', sales: 100 },
        { region: 'EU', model: 'C', sales: 250 },
        { region: 'CA', model: 'A', sales: 200 },
        { region: 'CA', model: 'B', sales: 100 },
        { region: 'CA', model: 'C', sales: 230 },
        { region: 'CA', model: 'D', sales: 400 },
        { region: 'CN', model: 'D', sales: 400 },
    ];
    const createdropdownlist = (dropdown) => {
        const arr = data.reduce((acc, cur) => {
            if (acc.indexOf(cur[dropdown]) < 0) acc.push(cur[dropdown]);
            return acc;
        }, []);
        const tmp = view.createDropDownTmp(arr);
        const element = document.querySelector(view.domstr[dropdown]);
        view.render(element, tmp);
    }
    const renderlist = (regionval, modelval) => {
        const newlist = data.filter(ele =>
            (ele.region === regionval || regionval === 'All') &&
            (ele.model === modelval || modelval === 'All')
        );
        const tmp = view.createTableBodyTmp(newlist);
        const element = document.querySelector(view.domstr.tablebody);
        view.render(element, tmp);
    }
    const listfilter = () => {
        const region = document.querySelector(view.domstr.region);
        const model = document.querySelector(view.domstr.model);
        let regionval = region.value;
        let modelval = model.value;

        region.addEventListener('change', event => {
            regionval = event.target.value;
            renderlist(regionval, modelval);
        });
        model.addEventListener('change', event => {
            modelval = event.target.value;
            renderlist(regionval, modelval);
        });
    }

    return {
        data,
        createdropdownlist,
        renderlist,
        listfilter,
    }
})(View);
// ~~~~~~~~~~~~~Controler~~~~~~~~~~~~~
const Controler = (model => {
    const init = () => {
        model.createdropdownlist('region');
        model.createdropdownlist('model');
        model.renderlist('All', 'All');
        model.listfilter();
    }

    return { init };
})(Model);
Controler.init();