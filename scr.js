const MOUNTAINS = [{
    name: "Kilimanjaro",
    height: 5895,
    place: "Tanzania"
}, {
    name: "Everest",
    height: 8848,
    place: "Nepal"
}, {
    name: "Mount Fuji",
    height: 3776,
    place: "Japan"
}, {
    name: "Vaalserberg",
    height: 323,
    place: "Netherlands"
}, {
    name: "Denali",
    height: 6168,
    place: "United States"
}, {
    name: "Popocatepetl",
    height: 5465,
    place: "Mexico"
}, {
    name: "Mont Blanc",
    height: 4808,
    place: "Italy/France"
}];

function toDo() {

    let table = document.createElement("table");
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let names = Object.keys(MOUNTAINS[0]);

    for (let i = 0; i < names.length; i++) {

        let text = document.createTextNode(`${names[i]}`);
        let th = document.createElement("th");
        th.appendChild(text);
        tr.appendChild(th);


    }




    for (let i = 0; i < MOUNTAINS.length; i++) {
        let tr2 = document.createElement("tr");
        table.appendChild(tr2);
        let obj = MOUNTAINS[i];
        let td = document.createElement("td");
        let text2 = document.createTextNode(obj.name);
        td.appendChild(text2);
        tr2.appendChild(td);

        let td2 = document.createElement("td");
        let text3 = document.createTextNode(obj.height);
        td2.appendChild(text3);
        td2.style.textAlign = 'right';
        tr2.appendChild(td2);



        let td3 = document.createElement("td");
        let text4 = document.createTextNode(obj.place);
        td3.appendChild(text4);
        tr2.appendChild(td3);


    }

    document.querySelector('#mountains').appendChild(table)

}

toDo();