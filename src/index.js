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

let hasStyleChanged = false;

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/shirshodipto/clc35ntfr005114mp3i4fd3i7",
  center: [11.172883, 20.720579],
  zoom: 1.2,
});

function updateMainLayer(mainLayer) {
  // check is all sublayer toggled
  const isAllInactive = mainLayer.subLayers.every(
    (layer) => layer.isActive === false
  );

  // Update mainlayer data
  mainLayer.isActive = isAllInactive ? false : true;

  // Update mainLayer dom
  const mainLayerDOM = document.getElementById(mainLayer.id);
  mainLayerDOM.className = isAllInactive ? "" : "active";
}

function toggleLayerHelper(data, type, status, DOMElement) {
  // Update the data
  data.isActive = status;

  // change map appearance
  map.setLayoutProperty(data.id, "visibility", status ? "visible" : "none");

  // toggle the dom element
  if (type === "main") {
    DOMElement.className = status ? "active" : "";
  } else {
    DOMElement.checked = status;
  }
}

function toggleMenus(status) {
  showLegends.className = status ? "" : "hide";
  mainLayerOptions.className = status ? "" : "hide";

  legendsInputs.forEach((input) => {
    const legend = document.querySelector(`[dataId=${input.id}]`);

    if (status && input.checked) {
      legend.classList.remove("hide");
    } else if ((status && !input.checked) || !status) {
      legend.classList.add("hide");
    }
  });
}

function renderMapLayers() {
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
}

/** ------------ Event listeners -------------*/
viewInputs.forEach((input) => {
  input.addEventListener("click", function (e) {
    loading.classList.remove("hide");
    toggleMenus(false);
    const copyrightChilds = document.querySelectorAll(".copyright *");

    copyrightChilds.forEach((child) => {
      if (e.target.value === "monochrome") {
        child.style.color = "black";
      }

      if (e.target.value === "satellite") {
        child.style.color = "white";
      }
    });

    map.setStyle(e.target.id);
    hasStyleChanged = true;
  });
});

mainLayerButtons.forEach((layer) => {
  layer.addEventListener("click", function () {
    const mainLayer = layerData[this.id];

    if (mainLayer.subLayers.length > 0) {
      mainLayer.isActive = !mainLayer.isActive;
      mainLayer.subLayers.forEach((layer) => {
        const subLayerDOM = document.getElementById(layer.id);
        toggleLayerHelper(layer, "sub", mainLayer.isActive, subLayerDOM);
      });

      this.className = mainLayer.isActive ? "active" : "";
    } else {
      toggleLayerHelper(mainLayer, "main", !mainLayer.isActive, this);
    }
  });
});

subLayerButtons.forEach((layer) => {
  layer.addEventListener("click", function () {
    const mainLayer = layerData[this.getAttribute("mainLayerId")];
    const subLayer = mainLayer.subLayers.find((layer) => layer.id === this.id);

    toggleLayerHelper(subLayer, "sub", !subLayer.isActive, this);
    updateMainLayer(mainLayer);
  });
});

legendsInputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    const legendName = e.target.id;
    const allLegends = document.querySelectorAll("div[dataId]");
    allLegends.forEach((legend) => {
      if (legend.getAttribute("dataId") !== legendName) {
        legend.classList.add("hide");
      } else {
        legend.classList.remove("hide");
      }
    });
  });
});

/** event listeners on the map tile */
map.on("load", renderMapLayers);

map.on("idle", function () {
  mapStylesDiv.className = "";
  toggleMenus(true);

  if (hasStyleChanged) {
    hasStyleChanged = false;
    renderMapLayers();
  }

  loading.classList.add("hide");
  console.log("idle");
});

// popup features
map.on("click", "conflicted-zones", (e) => {
  const coordinates = e.features[0].geometry.coordinates.slice();
  const div = createConflictPopUp(e.features[0].properties);

  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  new mapboxgl.Popup().setLngLat(coordinates).setDOMContent(div).addTo(map);
});

map.on("mouseenter", "conflicted-zones", () => {
  map.getCanvas().style.cursor = "pointer";
});

map.on("mouseleave", "conflicted-zones", () => {
  map.getCanvas().style.cursor = "";
});
