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
const conflictZonesLegends = document.querySelector(".conflict-zones-detail");
const oilSubLayers = document.querySelectorAll("#oil-linestrings div input");
const gasSubLayers = document.querySelectorAll("#gas-linestrings div input");
const loading = document.querySelector(".loading");
const copyrightChilds = document.querySelectorAll(".copyright *");

let currentLayer;
let isChangeStyle = 0;
let isOilActive = 1;
let activeOilSublayers = 8;
let activeGasSublayers = 8;
let isGasActive = 1;
let isZoneActive = 1;

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

function updateLayerDatas(main, isAdd) {
  const mainLayer = document.getElementById(main);
  if (main === "oil-pipelines") {
    if (isAdd) {
      activeOilSublayers += 1;
      mainLayer.className = "active";
      isOilActive = 1;
    } else {
      activeOilSublayers -= 1;
      if (activeOilSublayers === 0) {
        mainLayer.className = "";
        isOilActive = 0;
      }
    }
  } else if (main === "gas-pipelines") {
    if (isAdd) {
      activeGasSublayers += 1;
      mainLayer.className = "active";
      isGasActive = 1;
    } else {
      activeGasSublayers -= 1;
      if (activeGasSublayers === 0) {
        mainLayer.className = "";
        isGasActive = 0;
      }
    }
  }
}

function checkIsAllToggled(layerName, isAllActive) {
  const untoggledOne = mapIds[layerName].subLayers.find(
    (id) => id.isActive === isAllActive
  );

  return untoggledOne;
}

function manageSublayers(aSubLayer) {
  const sublayer = aSubLayer.id;
  const main = aSubLayer.parentElement.parentElement.getAttribute("mainLayer");
  const visibility = map.getLayoutProperty(sublayer, "visibility");
  if (visibility === "visible" || visibility === undefined) {
    updateLayerDatas(main, false);
    map.setLayoutProperty(sublayer, "visibility", "none");
  } else {
    updateLayerDatas(main, true);
    map.setLayoutProperty(sublayer, "visibility", "visible");
  }
}

function toggleMainLayerHelper(isActive, mainLayerName, mainLayerInputs) {
  if (isActive === 1) {
    mainLayerInputs.forEach((anInput) => {
      anInput.checked = false;
      updateLayerDatas(mainLayerName, false);
      map.setLayoutProperty(anInput.id, "visibility", "none");
    });
  } else {
    mainLayerInputs.forEach((anInput) => {
      anInput.checked = true;
      updateLayerDatas(mainLayerName, true);
      map.setLayoutProperty(anInput.id, "visibility", "visible");
    });
  }
}

function toggleLayer(data) {
  map.setLayoutProperty(
    data.id,
    "visibility",
    data.isActive ? "visible" : "none"
  );
}

// function toggleSubLayerStatus(subLayers) {
//   subLayers.forEach((layer) => {
//     layer.isActive = !layer.isActive;
//   });
// }

function toggleSubLayer() {
  // change sublayer data
  const mainLayer = layerData[this.getAttribute("mainLayerId")];
  console.log(mainLayer);
  // change map
  // change sublayer dom
  // check is all toggled
  //  if all toggled
  //    change main layer data
  //    change main Layer dom
}

function toggleMainLayer() {
  const mainLayer = layerData[this.getAttribute("id")];
  mainLayer.isActive = !mainLayer.isActive;

  if (mainLayer.subLayers.length > 0) {
    mainLayer.subLayers.forEach((layer) => {
      layer.isActive = !layer.isActive;
      toggleLayer(layer);
      const subLayerDOM = document.getElementById(layer.id);
      subLayerDOM.checked = layer.isActive;
    });
  } else {
    toggleLayer(mainLayer);
  }

  this.className = mainLayer.isActive ? "active" : "";
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
