var cepData = [
    {
        name: "Logradouro", 
        id: 0
    },
    {
        name: "Complemento",
        id: 1
    },
    {
        name: "Bairro",
        id: 2
    },
    {
        name: "Localidade",
        id: 3
    },
    {
        name: "UF",
        id: 4
    },
    {
        name: "Unidade",
        id: 5
    },
    {
        name: "IBGE",
        id: 6
    },
    {
        name: "GIA",
        id: 7
    }
];

function createUI() {
    var containerRight = $("#cep-data #cep-data-container-r");
    var containerLeft = $("#cep-data #cep-data-container-l");
    cepData.forEach(function (x, i) {
        var check = getCheckboxHtml(x.name, i);

        if (i % 2 === 0) {
            containerLeft.append(check);
        } else {
            containerRight.append(check);
        }
    });


    $(".check-add-data").change(addToList);
}

function addToList(e) {
    console.log(e);
    console.log(e.target);
    var item = getListItemHtml();
}

function getListItemHtml(labelName, index) {
    var container = document.createElement("div");
    container.classList.add("ms-Grid-row");
    container.classList.add("ms-sm12");

    var iconContainer = document.createElement("div");
    iconContainer.classList.add("ms-Grid-col");
    iconContainer.classList.add("ms-sm1");

    var icon = document.createElement("i");
    icon.classList.add("ms-Icon");
    icon.classList.add("ms-Icon--MoreVertical");
    icon.setAttribute("aria-hidden", "true");

    var nameContainer = document.createElement("div");
    nameContainer.classList.add("ms-Grid-col");
    nameContainer.classList.add("ms-sm11");

    nameContainer.innerText = labelName;

    iconContainer.appendChild(icon);

    container.appendChild(iconContainer);
    container.appendChild(nameContainer);

    return container;
}

function getCheckboxHtml(labelName, index) {
    var container = document.createElement("div");
    container.classList.add("check-add-data");

    var input = document.createElement("input");
    input.type = "checkbox";

    var label = document.createElement("label");
    label.innerText = labelName;

    container.appendChild(input);
    container.appendChild(label);

    return container;
}

$(document).ready(function() {
    createUI();
});