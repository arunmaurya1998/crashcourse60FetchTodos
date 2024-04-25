let url = "https://jsonplaceholder.typicode.com/todos";

let container = document.querySelector("#root");

let button = document.querySelector("#fetchButton");

button.addEventListener("click", function () {
  getData();
});

async function getData() {
  let res = await fetch(url);

  let data = await res.json();

  showdata(data);
}

function showdata(data) {
  data.map((ele, i) => {
    let div = document.createElement("div");
    div.id = "divcontainer";


    let userId = document.createElement("number")
    userId.innerHTML = ele.userId;
    userId.id = "userId"

    let Id = document.createElement("number")
    Id.innerHTML = ele.id;
    Id.id = "Id"



    let title = document.createElement("h2");
    title.innerText = ele.title;
    title.id = "title";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";

    let checkboxLabel = document.createElement("label");
    checkboxLabel.htmlFor = "checkboxLabel";
    checkboxLabel.textContent = ele.label;

    let complete = document.createElement("p")
    complete.innerText = ele.completed;
    complete.style.color= "blue"



    div.append( userId,Id, title, checkbox,checkboxLabel,complete);

    container.append(div);
  });
}
