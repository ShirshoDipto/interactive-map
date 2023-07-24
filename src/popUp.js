function createContent(classValue, textValue, appendTo) {
  const div = document.createElement("div");
  div.className = classValue;
  div.textContent = textValue;
  appendTo.appendChild(div);

  return div;
}

function createContainer(classValue, appendTo) {
  const div = document.createElement("div");
  div.className = classValue;
  appendTo.appendChild(div);

  return div;
}

export default function createConflictPopUp(data) {
  const div = document.createElement("div");
  div.className = "pop-up";

  createContent("title", data.territory, div);

  const nature = createContainer("nature", div);
  const since = createContainer("since", div);
  const deaths = createContainer("death", div);
  const currentStatus = createContainer("current-status", div);
  const impacts = createContainer("impacts", div);

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
