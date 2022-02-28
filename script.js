const cl = console.log;
var d = document;
d.i = d.getElementById;

let release = null;
let namespace = null;
let dockerUrl = null;

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
	// <ul class="list-unstyled" id="">
	let errorList = d.createElement("ul")
	errorList.setAttribute("class", "list-unstyled mt-3 p-2 bg-danger bg-opacity-10")
	errorList.setAttribute("id", `error_list_${tab}`)
	errorList.style.display = "none";
	cardBody.appendChild(errorList);
	
	// <div class="card-header fs-5">Database</div>
	let cardHeader = d.createElement("div");
	cardHeader.setAttribute("class", "card-header fs-5");
	cardHeader.innerHTML = tab;

	// <div class="card">
	let card = d.createElement("div");
	card.setAttribute("class", "card shadow-sm");
	card.setAttribute("id", `div_card_${tab}`);

	card.appendChild(cardHeader)
	card.appendChild(cardBody);

	div_config_card.appendChild(card);
})

function configHideAll(){
	Object.keys(config).forEach(tab => {
		let menu_item = d.i(`list_config_menu_${tab}`)
		menu_item.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
		let menu_item_error = d.i(`list_config_menu_${tab}_error`);
		menu_item_error.style.display = "none";
		let card = d.i(`div_card_${tab}`);
		card.style.display = "none";
	});
}

function configNavSelector(id){
	configHideAll();
	let menu_item = d.i(`list_config_menu_${id}`)
	menu_item.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center active");
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
	let foundAnyValidationErrors = false;
	div_generate.style.display = "none";
	Object.keys(config).forEach(tab => {
		let menu_item_error = d.i(`list_config_menu_${tab}_error`);
		menu_item_error.style.display = "none";
		let errorList = d.i(`error_list_${tab}`);
		errorList.style.display = "none";
		errorList.innerHTML = "";

		let errors = []
		config[tab].forEach(c => {
			let formElementID = `formElement_${c.e}`;
			let formElement = d.i(`formElement_${c.e}`);
			if(c.r && !formElement.value){
				menu_item_error.style.display = "inline-block";
				errors.push(`Missing value for <em>${c.l}</em>(<code>${c.e}</code>)`);
			}
		});
		if(tab == "Docker") {
			let value = d.i(`formElement_DOCKER_REGISTRY_TYPE`).value;
			if(value == "ECR") {
				if(!d.i(`formElement_DOCKER_REGISTRY_SERVER`).value) {
					menu_item_error.style.display = "inline-block";
					errors.push(`Missing value for <code>DOCKER_REGISTRY_SERVER</code>`);
				}
				aws_docker_list.forEach(aws => {
					if(!d.i(`formElement_${aws}`).value) {
						menu_item_error.style.display = "inline-block";
						errors.push(`Missing value for <code>${aws}</code>`);
					}
				});
			}
			if(value == "GCR" || value == "Custom") {
				if(!d.i(`formElement_DOCKER_REGISTRY_SERVER`).value) {
					menu_item_error.style.display = "inline-block";
					errors.push(`Missing value for <code>DOCKER_REGISTRY_SERVER</code>`);
				}
			}
		}

		if(tab == "File Storage") {
			let value = d.i(`formElement_STORAGE_ENGINE`).value;
			if(value == "AZURE") {
				azure_file_list.forEach(azure => {
					if(!d.i(`formElement_${azure}`).value) {
						menu_item_error.style.display = "inline-block";
						errors.push(`Missing value for <code>${azure}</code>`);
					}
				});
			}
		}

		if(errors.length > 0){
			foundAnyValidationErrors = true;
			errorList.style.display = "block";
			let li = d.createElement("li");
			errors.forEach(error => {
				let clone = li.cloneNode();
				clone.innerHTML = error;
				errorList.appendChild(clone);
			})
		}
	});
	return foundAnyValidationErrors;
}

const div_generate = d.i("div_generate");
div_generate.style.display = "none";
const div_generate_menu = d.i("div_generate_menu");
div_generate_menu.innerHTML = "";
const div_generate_card = d.i("div_generate_card");
div_generate_card.innerHTML = "";
const div_generate_commands_body = d.i("div_generate_commands_body");
div_generate_commands_body.innerHTML = "";
// Load file data

function generateFiles(){
	if(validateConfigData()) return ;
	div_config.style.display = "none";
	div_generate.style.display = "flex";
	div_generate_menu.innerHTML = "";
	div_generate_card.innerHTML = "";
	release = d.i("releaseVersion").value;
	namespace = d.i("formElement_DATA_STACK_NAMESPACE").value;
	dockerUrl = d.i("formElement_DOCKER_REGISTRY_SERVER").value;
	if(dockerUrl) dockerUrl += "/";
	Object.keys(yamlFiles).forEach(yaml => {
		let listGroupItem = d.createElement("button");
		listGroupItem.setAttribute("id", `list_generate_menu_${yamlFiles[yaml]}`);
		listGroupItem.setAttribute("class", "list-group-item list-group-item-action");
		listGroupItem.addEventListener("click", () => generateNavSelector(yamlFiles[yaml]));
		listGroupItem.innerHTML = yaml;
		div_generate_menu.appendChild(listGroupItem);

		// <div class="card-header fs-5">Database</div>
		let cardHeader = d.createElement("div");
		cardHeader.setAttribute("class", "card-header fs-6");
		cardHeader.innerHTML = `${yaml}
		(<code>${yamlFiles[yaml]}.yaml</code>)
		<div class="float-end">
		  <button type="button" class="btn btn-sm btn-outline-dark" onclick="copyYamlFile('${yamlFiles[yaml]}')">Copy ${icons["clipboard"]}</button>
		  <button type="button" class="btn btn-sm btn-success" onclick="downloadYamlFile('${yamlFiles[yaml]}')"">datastack_${namespace}_${yamlFiles[yaml]}.yaml ${icons["file-download-fill"]}</button>
		</div>
		`;

		let cardBody = d.createElement("div");
		cardBody.setAttribute("class", "card-body");
		cardBody.setAttribute("style", "overflow-x: auto");
		cardBody.setAttribute("id", `div_card_body_${yamlFiles[yaml]}`);
		if (yamlFiles[yaml] == "common") cardBody.innerHTML = `<pre>${yamlCommon(namespace, dockerUrl)}</pre>`;
		if (yamlFiles[yaml] == "dm") cardBody.innerHTML = `<pre>${yamlDM(namespace, dockerUrl)}</pre>`;
		if (yamlFiles[yaml] == "gw") cardBody.innerHTML = `<pre>${yamlGW(namespace, dockerUrl)}</pre>`;
		if (yamlFiles[yaml] == "mon") cardBody.innerHTML = `<pre>${yamlMON(namespace, dockerUrl)}</pre>`;
		if (yamlFiles[yaml] == "ne") cardBody.innerHTML = `<pre>${yamlNE(namespace, dockerUrl)}</pre>`;
		if (yamlFiles[yaml] == "pm") cardBody.innerHTML = `<pre>${yamlPM(namespace, dockerUrl)}</pre>`;
		if (yamlFiles[yaml] == "proxy") cardBody.innerHTML = `<pre>${yamlProxy(namespace, dockerUrl)}</pre>`;
		if (yamlFiles[yaml] == "sm") cardBody.innerHTML = `<pre>${yamlSM(namespace, dockerUrl)}</pre>`;
		if (yamlFiles[yaml] == "user") cardBody.innerHTML = `<pre>${yamlUSER(namespace, dockerUrl)}</pre>`;
		if (yamlFiles[yaml] == "messaging") cardBody.innerHTML = `<pre>${yamlMessaging(namespace, dockerUrl)}</pre>`;
		if (yamlFiles[yaml] == "cache") cardBody.innerHTML = `<pre>${yamlCache(namespace, dockerUrl)}</pre>`;
		if (yamlFiles[yaml] == "config") cardBody.innerHTML = `<pre>${yamlConfigMap(namespace, dockerUrl)}</pre>`;
		if (yamlFiles[yaml] == "serviceAccount") cardBody.innerHTML = `<pre>${yamlSA(namespace)}</pre>`;

		// <div class="card">
		let card = d.createElement("div");
		card.setAttribute("class", "card shadow-sm");
		card.setAttribute("id", `div_card_${yamlFiles[yaml]}`);
		// card.setAttribute("style", "height: 493px");

		card.appendChild(cardHeader)
		card.appendChild(cardBody);

		div_generate_card.appendChild(card);
	});
	generateNavSelector("common");
	commands(namespace).forEach((command, index) => {
		// <nav class="navbar navbar-expand-lg navbar-light bg-light">
		let nav = d.createElement("nav");
		nav.setAttribute("class", "navbar navbar-light bg-light")
		nav.innerHTML = `
		<div class="container-fluid">
			<div class="navitem">${command.t}</div>
			<div class="d-flex"><button class="btn btn-outline-dark btn-sm" onclick=copyCommand(${index})>Copy ${icons["clipboard"]}</button></div>
		</div>
		`;

		div_generate_commands_body.appendChild(nav);
		let div = d.createElement("div")
		div.setAttribute("class", "card p-1 bg-dark bg-opacity-75 text-light mb-3")
		div.innerHTML = `<pre class="text-break my-0">${command.c}</pre>`;
		div_generate_commands_body.appendChild(div);
	})
}

function generateHideAll(){
	Object.keys(yamlFiles).forEach(yaml => {
		let menu_item = d.i(`list_generate_menu_${yamlFiles[yaml]}`)
		menu_item.setAttribute("class", "list-group-item list-group-item-action");
		let card = d.i(`div_card_${yamlFiles[yaml]}`);
		card.style.display = "none";
	});
}

function generateNavSelector(id){
	generateHideAll();
	let menu_item = d.i(`list_generate_menu_${id}`)
	menu_item.setAttribute("class", "list-group-item list-group-item-action active");
	let card = d.i(`div_card_${id}`);
	card.style.display = "flex";
}

function copyYamlFile(type){
	let yamlData = null;
	if (type == "common") yamlData = yamlCommon(namespace, dockerUrl);
	if (type == "dm") yamlData = yamlDM(namespace, dockerUrl);
	if (type == "gw") yamlData = yamlGW(namespace, dockerUrl);
	if (type == "mon") yamlData = yamlMON(namespace, dockerUrl);
	if (type == "ne") yamlData = yamlNE(namespace, dockerUrl);
	if (type == "pm") yamlData = yamlPM(namespace, dockerUrl);
	if (type == "proxy") yamlData = yamlProxy(namespace, dockerUrl);
	if (type == "sm") yamlData = yamlSM(namespace, dockerUrl);
	if (type == "user") yamlData = yamlUSER(namespace, dockerUrl);
	if (type == "messaging") yamlData = yamlMessaging(namespace, dockerUrl);
	if (type == "cache") yamlData = yamlCache(namespace, dockerUrl);
	if (type == "config") yamlData = yamlConfigMap(namespace, dockerUrl);
	if (type == "serviceAccount") yamlData = yamlSA(namespace);
	navigator.clipboard.writeText(yamlData);
}

function copyCommand(index){
	navigator.clipboard.writeText(commands(namespace)[index].c);
}

function downloadYamlFile(type){
	let yamlData = null;
	if (type == "common") yamlData = yamlCommon(namespace, dockerUrl);
	if (type == "dm") yamlData = yamlDM(namespace, dockerUrl);
	if (type == "gw") yamlData = yamlGW(namespace, dockerUrl);
	if (type == "mon") yamlData = yamlMON(namespace, dockerUrl);
	if (type == "ne") yamlData = yamlNE(namespace, dockerUrl);
	if (type == "pm") yamlData = yamlPM(namespace, dockerUrl);
	if (type == "proxy") yamlData = yamlProxy(namespace, dockerUrl);
	if (type == "sm") yamlData = yamlSM(namespace, dockerUrl);
	if (type == "user") yamlData = yamlUSER(namespace, dockerUrl);
	if (type == "messaging") yamlData = yamlMessaging(namespace, dockerUrl);
	if (type == "cache") yamlData = yamlCache(namespace, dockerUrl);
	if (type == "config") yamlData = yamlConfigMap(namespace, dockerUrl);
	if (type == "serviceAccount") yamlData = yamlSA(namespace);
	let link = document.createElement("a");
  link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(yamlData));
  link.setAttribute('download', `datastack_${namespace}_${type}.yaml`);
  link.click();
}

function downloadAllFiles(){
	var zip = new JSZip();
	var yamlFolder = zip.folder(`${namespace}_yaml`);
	Object.keys(yamlFiles).forEach(yaml => {
		let type = yamlFiles[yaml];
		let yamlData = null;
		if (type == "common") yamlData = yamlCommon(namespace, dockerUrl);
		if (type == "dm") yamlData = yamlDM(namespace, dockerUrl);
		if (type == "gw") yamlData = yamlGW(namespace, dockerUrl);
		if (type == "mon") yamlData = yamlMON(namespace, dockerUrl);
		if (type == "ne") yamlData = yamlNE(namespace, dockerUrl);
		if (type == "pm") yamlData = yamlPM(namespace, dockerUrl);
		if (type == "proxy") yamlData = yamlProxy(namespace, dockerUrl);
		if (type == "sm") yamlData = yamlSM(namespace, dockerUrl);
		if (type == "user") yamlData = yamlUSER(namespace, dockerUrl);
		if (type == "messaging") yamlData = yamlMessaging(namespace, dockerUrl);
		if (type == "cache") yamlData = yamlCache(namespace, dockerUrl);
		if (type == "config") yamlData = yamlConfigMap(namespace, dockerUrl);
		if (type == "serviceAccount") yamlData = yamlSA(namespace);
		yamlFolder.file(`datastack_${namespace}_${type}.yaml`, yamlData);
	})
	zip.generateAsync({type:"base64"})
	.then(content => {
		let link = document.createElement("a");
	  link.setAttribute('href', 'data:application/zip;base64,' + encodeURIComponent(content));
	  link.setAttribute('download', `datastack_${namespace}_yaml.zip`);
	  link.click();
	});
}