function createContent(classValue, textValue, appendTo) {
  const div = document.createElement("div");
  div.className = classValue;
  div.textContent = textValue;
  appendTo.appendChild(div);

  return div;
}

function createContainer(appendTo) {
  const div = document.createElement("div");
  div.className = "infoContainer";
  appendTo.appendChild(div);

  return div;
}

export default function createConflictPopUp(data) {
  const div = document.createElement("div");
  div.className = "pop-up";

  createContent("title", data.territory, div);

  const nature = createContainer(div);
  const since = createContainer(div);
  const deaths = createContainer(div);
  const currentStatus = createContainer(div);
  const impacts = createContainer(div);

  createContent("header", "NATURE OF CONFLICT", nature);
  createContent("description", data.nature_of_conflict, nature);
  createContent("header", "SINCE", since);
  createContent("description", data.since, since);
  createContent("header", "DEATHS", deaths);
  createContent("description", data.deaths, deaths);
  createContent("header", "CURRENT STATUS", currentStatus);
  createContent("description", data.current_status, currentStatus);
  createContent("header", "NOTABLE IMPACTS", impacts);
  createContent("description", data.notable_impacts, impacts);

  return div;
}
