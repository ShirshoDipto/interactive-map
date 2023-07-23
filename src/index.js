import mapboxgl from "mapbox-gl";
import createConflictPopUp from "./popUp";
import { layerData } from "./data";

const mainLayerOptions = document.getElementById("main-layer-options");
const mainLayerButtons = document.querySelectorAll("#main-layer-options a");
const subLayerButtons = document.querySelectorAll(".labels-details div input");
const viewInputs = document.querySelectorAll("#map-styles input");
const mapStylesDiv = document.querySelector("#map-styles");
const showLegends = document.querySelector("#show-legends");
const legendsInputs = document.querySelectorAll(".legends-inputs input");
const loading = document.querySelector(".loading");
const copyrightChilds = document.querySelectorAll(".copyright *");

let currentLayer;
let isChangeStyle = 0;

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/shirshodipto/clc35ntfr005114mp3i4fd3i7",
  center: [11.172883, 20.720579],
  zoom: 1.2,
});

function updateLegends(e) {
  const legendName = e.target.id;
  const allLegends = document.querySelectorAll("div[dataId]");
  allLegends.forEach((legend) => {
    if (legend.getAttribute("dataId") !== legendName) {
      legend.classList.add("hide");
    } else {
      legend.classList.remove("hide");
    }
  });
}

function displayPopUp(e) {
  const coordinates = e.features[0].geometry.coordinates.slice();
  const div = createConflictPopUp(e.features[0].properties);

  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  new mapboxgl.Popup().setLngLat(coordinates).setDOMContent(div).addTo(map);
}

function updateMainLayer(mainLayer) {
  // check is all sublayer toggled
  const isAllInactive = mainLayer.subLayers.every(
    (layer) => layer.isActive === false
  );

  const mainLayerDOM = document.getElementById(mainLayer.id);
  // Update mainlayer data
  mainLayer.isActive = isAllInactive ? false : true;
  // Update mainLayer dom
  mainLayerDOM.className = isAllInactive ? "" : "active";
}

function toggleLayerHelper(data, type, DOMElement) {
  // Update the data
  data.isActive = !data.isActive;

  // change map appearance
  map.setLayoutProperty(
    data.id,
    "visibility",
    data.isActive ? "visible" : "none"
  );

  // toggle the dom element
  if (type === "main") {
    DOMElement.className = data.isActive ? "active" : "";
  } else {
    DOMElement.checked = data.isActive;
  }
}

function toggleSubLayer() {
  const subLayerId = this.getAttribute("id");
  const mainLayer = layerData[this.getAttribute("mainLayerId")];
  const subLayer = mainLayer.subLayers.find((layer) => layer.id === subLayerId);

  toggleLayerHelper(subLayer, "sub", this);
  updateMainLayer(mainLayer);
}

function toggleMainLayer() {
  const mainLayer = layerData[this.getAttribute("id")];

  if (mainLayer.subLayers.length > 0) {
    mainLayer.subLayers.forEach((layer) => {
      const subLayerDOM = document.getElementById(layer.id);
      toggleLayerHelper(layer, "sub", subLayerDOM);
    });
  } else {
    toggleLayerHelper(mainLayer, "main", this);
  }
}

// ############ MAIN WORKFLOW #############

viewInputs.forEach((input) => {
  input.addEventListener("click", (layer) => {
    loading.classList.remove("hide");

    copyrightChilds.forEach((child) => {
      if (input.value === "monochrome") {
        child.style.color = "black";
      }
      if (input.value === "satellite") {
        child.style.color = "white";
      }
    });

    map.setStyle(layer.target.id);
    isChangeStyle = 1;
  });
});

mainLayerButtons.forEach((layer) => {
  layer.addEventListener("click", toggleMainLayer);
});

subLayerButtons.forEach((layer) => {
  layer.addEventListener("click", toggleSubLayer);
});

legendsInputs.forEach((input) => {
  input.addEventListener("click", updateLegends);
});

map.on("load", () => {
  loading.classList.remove("hide");
  currentLayer = map.style._layers;
  Object.values(layerData).forEach((layer) => {
    if (layer.subLayers.length === 0) {
      map.setLayoutProperty(
        layer.id,
        "visibility",
        layer.isActive ? "visible" : "none"
      );
    } else {
      layer.subLayers.forEach((subLayer) => {
        map.setLayoutProperty(
          subLayer.id,
          "visibility",
          subLayer.isActive ? "visible" : "none"
        );
      });
    }
  });
});

map.on("idle", () => {
  mapStylesDiv.className = "";
  showLegends.className = "";
  mainLayerOptions.className = "";
  if (legendsInputs[0].checked) {
    const conflictZonesLegends = document.querySelector(
      ".conflict-zones-detail"
    );
    conflictZonesLegends.classList.remove("hide");
  }

  // if the map has changed style, load
  // previous styles layers
  if (isChangeStyle === 1) {
    isChangeStyle = 0;
    Object.values(mapIds).forEach((mainLayer) => {
      mainLayer.forEach((sublayer) => {
        const prevVis = currentLayer[`${sublayer}`].visibility;
        map.setLayoutProperty(sublayer, "visibility", prevVis);
      });
    });

    currentLayer = map.style._layers;
  }

  loading.classList.add("hide");
  console.log("idle");
});

// add popup features
map.on("click", "conflicted-zones", (e) => {
  displayPopUp(e);
});

map.on("mouseenter", "conflicted-zones", () => {
  map.getCanvas().style.cursor = "pointer";
});

map.on("mouseleave", "conflicted-zones", () => {
  map.getCanvas().style.cursor = "";
});
