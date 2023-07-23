import mapboxgl from "mapbox-gl";
import createConflictPopUp from "./popUp";
import { mapIds } from "./data";

const mainLayerOptions = document.getElementById("main-layer-options");
const mainLayerButtons = document.querySelectorAll("#main-layer-options a");
const viewInputs = document.querySelectorAll("#map-styles input");
const mapStylesDiv = document.querySelector("#map-styles");
const showLegends = document.querySelector("#show-legends");
const legendsInputs = document.querySelectorAll(".legends-inputs input");
const conflictZonesLegends = document.querySelector(".conflict-zones-detail");
const oilSubLayers = document.querySelectorAll("#oil-linestrings div input");
const gasSubLayers = document.querySelectorAll("#gas-linestrings div input");
const loading = document.querySelector(".loading");
const copyrightChilds = document.querySelectorAll(".copyright *");

const subLayerButtons = document.querySelectorAll(
  "[mainLayerId='gas-pipelines']"
);
subLayerButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(this.checked);
  });
});

let currentLayer;
let isChangeStyle = 0;
let isOilActive = 1;
let activeOilSublayers = 8;
let activeGasSublayers = 8;
let isGasActive = 1;
let isZoneActive = 1;

function checkIsAllToggled(layerName, isAllActive) {
  const untoggledOne = mapIds[layerName].subLayers.find(
    (id) => id.isActive === isAllActive
  );

  return untoggledOne;
}

const status = checkIsAllToggled("gas-pipelines", false);
console.log(status);

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

// function toggleMainLayer(e) {
//   e.preventDefault();
//   e.stopPropagation();
//   loading.classList.remove("hide");
//   const clickedLayer = e.target.id;

//   if (clickedLayer === "oil-pipelines") {
//     toggleMainLayerHelper(isOilActive, clickedLayer, oilSubLayers);
//   } else if (clickedLayer === "gas-pipelines") {
//     toggleMainLayerHelper(isGasActive, clickedLayer, gasSubLayers);
//   } else if (clickedLayer === "conflicted-zones") {
//     if (isZoneActive === 0) {
//       this.className = "active";
//       isZoneActive = 1;
//       map.setLayoutProperty(
//         mapIds["conflicted-zones"][0],
//         "visibility",
//         "visible"
//       );
//     } else {
//       this.className = "";
//       isZoneActive = 0;
//       map.setLayoutProperty(
//         mapIds["conflicted-zones"][0],
//         "visibility",
//         "none"
//       );
//     }
//   }
// }

function toggleMainLayer() {
  const mainLayer = mapIds[this.getAttribute("id")];
  if (mainLayer.subLayers.length > 0) {
    // get all the sublayers
    // change the data of the main Layer
    // change the inputs of the sublayers
  } else {
    mainLayer.isActive = !mainLayer.isActive;
    map.setLayoutProperty(
      mainLayer.mainLayerId,
      "visibility",
      mainLayer.isActive ? "visible" : "none"
    );
    this.className = mainLayer.isActive ? "active" : "";
  }
}

// ############ MAIN WORKFLOW #############

// oilSubLayers.forEach((layer) => {
//   layer.addEventListener("click", () => {
//     loading.classList.remove("hide");
//     manageSublayers(layer);
//   });
// });

// gasSubLayers.forEach((layer) => {
//   layer.addEventListener("click", (e) => {
//     loading.classList.remove("hide");
//     manageSublayers(layer, e);
//   });
// });

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

legendsInputs.forEach((input) => {
  input.addEventListener("click", updateLegends);
});

map.on("load", () => {
  loading.classList.remove("hide");
  currentLayer = map.style._layers;
  Object.values(mapIds).forEach((id) => {
    if (id.subLayers.length === 0) {
      map.setLayoutProperty(
        id.mainLayerId,
        "visibility",
        id.isActive ? "visible" : "none"
      );
    } else {
      id.subLayers.forEach((layer) => {
        map.setLayoutProperty(
          layer.subLayerId,
          "visibility",
          layer.isActive ? "visible" : "none"
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
