const cl = console.log;
var d = document;
d.i = d.getElementById;

// Elements by ID
const div_list_config_menu = d.i("div_list_config_menu");
div_list_config_menu.innerHTML = "";
const div_config_card = d.i("div_config_card");
div_config_card.innerHTML = "";

const aws_docker_list = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_DEFAULT_REGION"];

const azure_file_list = ["STORAGE_AZURE_CONNECTION_STRING", "STORAGE_AZURE_CONTAINER", "STORAGE_AZURE_SHARED_KEY", "STORAGE_AZURE_TIMEOUT"];

// Load config data
Object.keys(config).forEach(tab => {
	// <div class="card-body">
	let cardBody = d.createElement("div");
	cardBody.setAttribute("class", "card-body");

	// <a href="#" class="list-group-item list-group-item-action" onclick="configNavSelector('Database')">Database</a>
	let listGroupItem = d.createElement("button");
	listGroupItem.setAttribute("id", `list_config_menu_${tab}`);
	listGroupItem.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
	listGroupItem.addEventListener("click", () => configNavSelector(tab));
	listGroupItem.innerHTML = `${tab}
	<span class="badge bg-danger rounded-pill float-end" id="list_config_menu_${tab}_error">!</span>`;
	div_list_config_menu.appendChild(listGroupItem);

	config[tab].forEach(c => {
		// <label for="MONGO_AUTHOR_URL" class="col-sm-2 col-form-label">
		let label = d.createElement("label");
		label.setAttribute("for", c.l);
		label.setAttribute("class", "col-sm-2 col-form-label");
		label.innerHTML = `${c.l}<span class="text-danger" id="lable_required_${c.e}" style="display:none;">*</span>`;
		if(c.r) label.innerHTML = `${c.l}<span class="text-danger" id="lable_required_${c.e}">*</span>`;
		
		let formElement = null;
		// <select class="form-select form-select-sm" onchange="formSelectChanged()">
		if(c.t == "select") {
			formElement = d.createElement("select")
			formElement.setAttribute("class", "form-select form-select-sm")
			formElement.addEventListener("change", () => formSelectChanged(c.e));
			let option = d.createElement('option');
			c.v.forEach(v => {
				let clone = option.cloneNode();
				clone.value = v;
				clone.innerHTML = v;
				formElement.appendChild(clone);
			})
			formElement.value = c.d;
		} else if(c.t == "checkbox") {
			// <input class="form-check-input" type="checkbox" value="">
			formElement = d.createElement("input")
			formElement.setAttribute("class", "form-check-input");
			formElement.setAttribute("type", c.t);
			formElement.checked = c.d;
		} else {
			// <input type="text" class="form-control form-control-sm" id="input_MONGO_AUTHOR_URL">
			formElement = d.createElement("input");
			formElement.setAttribute("class", "form-control form-control-sm");
			formElement.setAttribute("type", c.t);
			formElement.setAttribute("autocomplete", "false");
			if(c.d) {
				formElement.value = c.d;
				formElement.setAttribute("placeholder", c.d);
			}
		}
		formElement.setAttribute("id", `formElement_${c.e}`);


		// <div class="col-sm-4">
		let inputDiv = d.createElement("div");
		inputDiv.setAttribute("class", "col-sm-3");
		inputDiv.appendChild(formElement);

		// <span id="input_MONGO_AUTHOR_URL" class="form-text">(MONGO_AUTHOR_URL)</span>
		let hint = d.createElement("span");
		hint.setAttribute("class", "form-text ");
		hint.setAttribute("id", `formElement_${c.e}`);
		hint.innerHTML = `<code>${c.e}</code>`
		if(c.h) hint.innerHTML = `<code>${c.e}</code>. ${c.h}`

		// <div class="col-auto">
		let hintDiv = d.createElement("div");
		hintDiv.setAttribute("class", "col-7");
		hintDiv.appendChild(hint);
		
		// <div class="row mb-3 align-items-center">
		let row = d.createElement("div");
		row.setAttribute("class", "row align-items-center");
		row.setAttribute("id", `row_${c.e}`);
		row.appendChild(label);
		row.appendChild(inputDiv);
		row.appendChild(hintDiv);

		cardBody.appendChild(row);
	});
	// <div class="card-header fs-5">Database</div>
	let cardHeader = d.createElement("div");
	cardHeader.setAttribute("class", "card-header fs-5");
	cardHeader.innerHTML = tab;

	// <div class="card">
	let card = d.createElement("div");
	card.setAttribute("class", "card");
	card.setAttribute("id", `div_card_${tab}`);

	card.appendChild(cardHeader)
	card.appendChild(cardBody);

	div_config_card.appendChild(card);
})

function configHideAll(){
	Object.keys(config).forEach(tab => {
		let menu_item = d.i(`list_config_menu_${tab}`)
		menu_item.setAttribute("class", "list-group-item list-group-item-action");
		let menu_item_error = d.i(`list_config_menu_${tab}_error`);
		menu_item_error.style.display = "none";
		let card = d.i(`div_card_${tab}`);
		card.style.display = "none";
	});
}

function configNavSelector(id){
	configHideAll();
	let menu_item = d.i(`list_config_menu_${id}`)
	menu_item.setAttribute("class", "list-group-item list-group-item-action active");
	let card = d.i(`div_card_${id}`);
	card.style.display = "flex";
}
configNavSelector("Database");

function toggleVisibility(list, visibility){
	list.forEach(az => d.i(`formElement_${az}`).value = "");
	list.forEach(az => d.i(`row_${az}`).style.display = visibility);
}

function formSelectChanged(id){
	let formElement = `formElement_${id}`
	let value = d.i(formElement).value;
	if(id == "DOCKER_REGISTRY_TYPE") {
		toggleVisibility(aws_docker_list, "none");
		d.i(`lable_required_DOCKER_REGISTRY_SERVER`).style.display = "none";
		aws_docker_list.forEach(aws => d.i(`lable_required_${aws}`).style.display = "none");
		if(value == "ECR") {
			toggleVisibility(aws_docker_list, "flex");
			d.i(`lable_required_DOCKER_REGISTRY_SERVER`).style.display = "inline";
			aws_docker_list.forEach(aws => d.i(`lable_required_${aws}`).style.display = "inline");
		}
		if(value == "GCR" || value == "Custom") {
			d.i(`lable_required_DOCKER_REGISTRY_SERVER`).style.display = "inline";
		}
	}

	if(id == "STORAGE_ENGINE") {
		toggleVisibility(azure_file_list, "none");
		azure_file_list.forEach(azure => d.i(`lable_required_${azure}`).style.display = "none");
		if(value == "AZURE") {
			toggleVisibility(azure_file_list, "flex");
			azure_file_list.forEach(azure => d.i(`lable_required_${azure}`).style.display = "inline");
		}
	}

}
formSelectChanged("DOCKER_REGISTRY_TYPE");
formSelectChanged("STORAGE_ENGINE");

function validateConfigData(){
	Object.keys(config).forEach(tab => {
		let menu_item_error = d.i(`list_config_menu_${tab}_error`);
		menu_item_error.style.display = "none";
		config[tab].forEach(c => {
			let formElementID = `formElement_${c.e}`;
			let formElement = d.i(`formElement_${c.e}`);
			if(c.r && !formElement.value){
				menu_item_error.style.display = "inline-block";
			}
		});
		if(tab == "Docker") {
			let formElementID = `formElement_DOCKER_REGISTRY_TYPE`;
			let formElement = d.i(`formElement_DOCKER_REGISTRY_TYPE`);
			let value = formElement.value;
			if(value == "ECR") {
				toggleVisibility(aws_docker_list, "flex");
				d.i(`lable_required_DOCKER_REGISTRY_SERVER`).style.display = "inline";
				aws_docker_list.forEach(aws => d.i(`lable_required_${aws}`).style.display = "inline");
			}
			if(value == "GCR" || value == "Custom") {
				d.i(`lable_required_DOCKER_REGISTRY_SERVER`).style.display = "inline";
			}
		}
	});
}

function generateFiles(){
	validateConfigData();
}