/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapIds": () => (/* binding */ mapIds)
/* harmony export */ });
const mapIds = {
  "conflicted-zones": ["conflicted-zones"],
  "oil-pipelines": [
    "oil-pipelines-operating",
    "oil-pipelines-retired",
    "oil-pipelines-cancelled",
    "oil-pipelines-construction",
    "oil-pipelines-shelved",
    "oil-pipelines-proposed",
    "oil-pipelines-mothballed",
    "oil-pipelines-idle",
  ],
  "gas-pipelines": [
    "gas-pipelines-operating",
    "gas-pipelines-retired",
    "gas-pipelines-cancelled",
    "gas-pipelines-construction",
    "gas-pipelines-shelved",
    "gas-pipelines-proposed",
    "gas-pipelines-mothballed",
    "gas-pipelines-idle",
  ],
};


/***/ }),

/***/ "./src/popUp.js":
/*!**********************!*\
  !*** ./src/popUp.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createConflictPopUp)
/* harmony export */ });
function createConflictPopUp(data) {
  const div = document.createElement("div");
  div.className = "pop-up";

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = data.territory;
  div.appendChild(title);

  const nature = document.createElement("div");
  nature.className = "nature";
  div.appendChild(nature);

  const since = document.createElement("div");
  since.className = "since";
  div.appendChild(since);

  const deaths = document.createElement("div");
  deaths.className = "deaths";
  div.appendChild(deaths);

  const currentStatus = document.createElement("div");
  currentStatus.className = "current-status";
  div.appendChild(currentStatus);

  const impacts = document.createElement("div");
  impacts.className = "impacts";
  div.appendChild(impacts);

  const header1 = document.createElement("div");
  header1.className = "header";
  header1.textContent = "NATURE OF CONFLICT";
  nature.appendChild(header1);

  const description1 = document.createElement("div");
  description1.className = "description";
  description1.textContent = data.nature_of_conflict;
  nature.appendChild(description1);

  const header2 = document.createElement("div");
  header2.className = "header";
  header2.textContent = "SINCE";
  since.appendChild(header2);

  const description2 = document.createElement("div");
  description2.className = "description";
  description2.textContent = data.since;
  since.appendChild(description2);

  const header3 = document.createElement("div");
  header3.className = "header";
  header3.textContent = "DEATHS";
  deaths.appendChild(header3);

  const description3 = document.createElement("div");
  description3.className = "description";
  description3.textContent = data.deaths;
  deaths.appendChild(description3);

  const header4 = document.createElement("div");
  header4.className = "header";
  header4.textContent = "CURRENT STATUS";
  currentStatus.appendChild(header4);

  const description4 = document.createElement("div");
  description4.className = "description";
  description4.textContent = data.current_status;
  currentStatus.appendChild(description4);

  const header5 = document.createElement("div");
  header5.className = "header";
  header5.textContent = "NOTABLE IMPACTS";
  impacts.appendChild(header5);

  const description5 = document.createElement("div");
  description5.className = "description";
  description5.textContent = data.notable_impacts;
  impacts.appendChild(description5);

  return div;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mapbox-gl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _popUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popUp */ "./src/popUp.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/data.js");




const layers = document.getElementById("layers");
const allLayers = document.querySelectorAll("#layers a");
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

Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mapbox-gl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) = "pk.eyJ1Ijoic2hpcnNob2RpcHRvIiwiYSI6ImNsYnlraHR4dDB1Njgzb2xobHZrMG1kY2gifQ.ndu_e63-o0H8MAWnvQ3EWA";
const map = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mapbox-gl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  container: "map",
  style: "mapbox://styles/shirshodipto/clc35ntfr005114mp3i4fd3i7",
  center: [11.172883, 20.720579],
  zoom: 1.2,
});

// ESLINT

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
  const div = (0,_popUp__WEBPACK_IMPORTED_MODULE_1__["default"])(e.features[0].properties);

  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'mapbox-gl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().setLngLat(coordinates).setDOMContent(div).addTo(map);
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

function toggleMainLayer(e) {
  e.preventDefault();
  e.stopPropagation();
  loading.classList.remove("hide");
  const clickedLayer = e.target.id;

  if (clickedLayer === "oil-pipelines") {
    toggleMainLayerHelper(isOilActive, clickedLayer, oilSubLayers);
  } else if (clickedLayer === "gas-pipelines") {
    toggleMainLayerHelper(isGasActive, clickedLayer, gasSubLayers);
  } else if (clickedLayer === "conflicted-zones") {
    if (isZoneActive === 0) {
      this.className = "active";
      isZoneActive = 1;
      map.setLayoutProperty(
        _data__WEBPACK_IMPORTED_MODULE_2__.mapIds["conflicted-zones"][0],
        "visibility",
        "visible"
      );
    } else {
      this.className = "";
      isZoneActive = 0;
      map.setLayoutProperty(
        _data__WEBPACK_IMPORTED_MODULE_2__.mapIds["conflicted-zones"][0],
        "visibility",
        "none"
      );
    }
  }
}

// ############ MAIN WORKFLOW #############

oilSubLayers.forEach((layer) => {
  layer.addEventListener("click", () => {
    loading.classList.remove("hide");
    manageSublayers(layer);
  });
});

gasSubLayers.forEach((layer) => {
  layer.addEventListener("click", (e) => {
    loading.classList.remove("hide");
    manageSublayers(layer, e);
  });
});

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

allLayers.forEach((layer) => {
  layer.addEventListener("click", toggleMainLayer);
});

legendsInputs.forEach((input) => {
  input.addEventListener("click", updateLegends);
});

map.on("load", () => {
  loading.classList.remove("hide");
  currentLayer = map.style._layers;
  Object.values(_data__WEBPACK_IMPORTED_MODULE_2__.mapIds).forEach((value) => {
    value.forEach((layer) => {
      map.setLayoutProperty(layer, "visibility", "visible");
    });
  });
});

map.on("idle", () => {
  mapStylesDiv.className = "";
  showLegends.className = "";
  layers.className = "";
  if (legendsInputs[0].checked === true) {
    conflictZonesLegends.classList.remove("hide");
  }

  // if the map has changed style, load
  // previous styles layers
  if (isChangeStyle === 1) {
    isChangeStyle = 0;
    Object.values(_data__WEBPACK_IMPORTED_MODULE_2__.mapIds).forEach((mainLayer) => {
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O1VDaEZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNTO0FBQ1Y7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0lBQW9CLEdBQUcsa0dBQXdCO0FBQy9DLGdCQUFnQix3SUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0RBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdJQUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQTZCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUE2QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlDQUFNO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5Q0FBTTtBQUN4QjtBQUNBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVyYWN0aXZlLW1hcC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL2ludGVyYWN0aXZlLW1hcC8uL3NyYy9wb3BVcC5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tYXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtbWFwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tYXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tYXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1tYXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1hcElkcyA9IHtcbiAgXCJjb25mbGljdGVkLXpvbmVzXCI6IFtcImNvbmZsaWN0ZWQtem9uZXNcIl0sXG4gIFwib2lsLXBpcGVsaW5lc1wiOiBbXG4gICAgXCJvaWwtcGlwZWxpbmVzLW9wZXJhdGluZ1wiLFxuICAgIFwib2lsLXBpcGVsaW5lcy1yZXRpcmVkXCIsXG4gICAgXCJvaWwtcGlwZWxpbmVzLWNhbmNlbGxlZFwiLFxuICAgIFwib2lsLXBpcGVsaW5lcy1jb25zdHJ1Y3Rpb25cIixcbiAgICBcIm9pbC1waXBlbGluZXMtc2hlbHZlZFwiLFxuICAgIFwib2lsLXBpcGVsaW5lcy1wcm9wb3NlZFwiLFxuICAgIFwib2lsLXBpcGVsaW5lcy1tb3RoYmFsbGVkXCIsXG4gICAgXCJvaWwtcGlwZWxpbmVzLWlkbGVcIixcbiAgXSxcbiAgXCJnYXMtcGlwZWxpbmVzXCI6IFtcbiAgICBcImdhcy1waXBlbGluZXMtb3BlcmF0aW5nXCIsXG4gICAgXCJnYXMtcGlwZWxpbmVzLXJldGlyZWRcIixcbiAgICBcImdhcy1waXBlbGluZXMtY2FuY2VsbGVkXCIsXG4gICAgXCJnYXMtcGlwZWxpbmVzLWNvbnN0cnVjdGlvblwiLFxuICAgIFwiZ2FzLXBpcGVsaW5lcy1zaGVsdmVkXCIsXG4gICAgXCJnYXMtcGlwZWxpbmVzLXByb3Bvc2VkXCIsXG4gICAgXCJnYXMtcGlwZWxpbmVzLW1vdGhiYWxsZWRcIixcbiAgICBcImdhcy1waXBlbGluZXMtaWRsZVwiLFxuICBdLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbmZsaWN0UG9wVXAoZGF0YSkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NOYW1lID0gXCJwb3AtdXBcIjtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBkYXRhLnRlcnJpdG9yeTtcbiAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBuYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXR1cmUuY2xhc3NOYW1lID0gXCJuYXR1cmVcIjtcbiAgZGl2LmFwcGVuZENoaWxkKG5hdHVyZSk7XG5cbiAgY29uc3Qgc2luY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaW5jZS5jbGFzc05hbWUgPSBcInNpbmNlXCI7XG4gIGRpdi5hcHBlbmRDaGlsZChzaW5jZSk7XG5cbiAgY29uc3QgZGVhdGhzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVhdGhzLmNsYXNzTmFtZSA9IFwiZGVhdGhzXCI7XG4gIGRpdi5hcHBlbmRDaGlsZChkZWF0aHMpO1xuXG4gIGNvbnN0IGN1cnJlbnRTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXJyZW50U3RhdHVzLmNsYXNzTmFtZSA9IFwiY3VycmVudC1zdGF0dXNcIjtcbiAgZGl2LmFwcGVuZENoaWxkKGN1cnJlbnRTdGF0dXMpO1xuXG4gIGNvbnN0IGltcGFjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbXBhY3RzLmNsYXNzTmFtZSA9IFwiaW1wYWN0c1wiO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW1wYWN0cyk7XG5cbiAgY29uc3QgaGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlcjEuY2xhc3NOYW1lID0gXCJoZWFkZXJcIjtcbiAgaGVhZGVyMS50ZXh0Q29udGVudCA9IFwiTkFUVVJFIE9GIENPTkZMSUNUXCI7XG4gIG5hdHVyZS5hcHBlbmRDaGlsZChoZWFkZXIxKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNjcmlwdGlvbjEuY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbjEudGV4dENvbnRlbnQgPSBkYXRhLm5hdHVyZV9vZl9jb25mbGljdDtcbiAgbmF0dXJlLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uMSk7XG5cbiAgY29uc3QgaGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlcjIuY2xhc3NOYW1lID0gXCJoZWFkZXJcIjtcbiAgaGVhZGVyMi50ZXh0Q29udGVudCA9IFwiU0lOQ0VcIjtcbiAgc2luY2UuYXBwZW5kQ2hpbGQoaGVhZGVyMik7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzY3JpcHRpb24yLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb24yLnRleHRDb250ZW50ID0gZGF0YS5zaW5jZTtcbiAgc2luY2UuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24yKTtcblxuICBjb25zdCBoZWFkZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyMy5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xuICBoZWFkZXIzLnRleHRDb250ZW50ID0gXCJERUFUSFNcIjtcbiAgZGVhdGhzLmFwcGVuZENoaWxkKGhlYWRlcjMpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0aW9uMy5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uMy50ZXh0Q29udGVudCA9IGRhdGEuZGVhdGhzO1xuICBkZWF0aHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24zKTtcblxuICBjb25zdCBoZWFkZXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyNC5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xuICBoZWFkZXI0LnRleHRDb250ZW50ID0gXCJDVVJSRU5UIFNUQVRVU1wiO1xuICBjdXJyZW50U3RhdHVzLmFwcGVuZENoaWxkKGhlYWRlcjQpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0aW9uNC5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uNC50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudF9zdGF0dXM7XG4gIGN1cnJlbnRTdGF0dXMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb240KTtcblxuICBjb25zdCBoZWFkZXI1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyNS5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xuICBoZWFkZXI1LnRleHRDb250ZW50ID0gXCJOT1RBQkxFIElNUEFDVFNcIjtcbiAgaW1wYWN0cy5hcHBlbmRDaGlsZChoZWFkZXI1KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNjcmlwdGlvbjUuY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbjUudGV4dENvbnRlbnQgPSBkYXRhLm5vdGFibGVfaW1wYWN0cztcbiAgaW1wYWN0cy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbjUpO1xuXG4gIHJldHVybiBkaXY7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBtYXBib3hnbCBmcm9tIFwibWFwYm94LWdsXCI7XHJcbmltcG9ydCBjcmVhdGVDb25mbGljdFBvcFVwIGZyb20gXCIuL3BvcFVwXCI7XHJcbmltcG9ydCB7IG1hcElkcyB9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmNvbnN0IGxheWVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGF5ZXJzXCIpO1xyXG5jb25zdCBhbGxMYXllcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2xheWVycyBhXCIpO1xyXG5jb25zdCB2aWV3SW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtYXAtc3R5bGVzIGlucHV0XCIpO1xyXG5jb25zdCBtYXBTdHlsZXNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcC1zdHlsZXNcIik7XHJcbmNvbnN0IHNob3dMZWdlbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93LWxlZ2VuZHNcIik7XHJcbmNvbnN0IGxlZ2VuZHNJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxlZ2VuZHMtaW5wdXRzIGlucHV0XCIpO1xyXG5jb25zdCBjb25mbGljdFpvbmVzTGVnZW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmxpY3Qtem9uZXMtZGV0YWlsXCIpO1xyXG5jb25zdCBvaWxTdWJMYXllcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI29pbC1saW5lc3RyaW5ncyBkaXYgaW5wdXRcIik7XHJcbmNvbnN0IGdhc1N1YkxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2FzLWxpbmVzdHJpbmdzIGRpdiBpbnB1dFwiKTtcclxuY29uc3QgbG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZ1wiKTtcclxuY29uc3QgY29weXJpZ2h0Q2hpbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb3B5cmlnaHQgKlwiKTtcclxuXHJcbmxldCBjdXJyZW50TGF5ZXI7XHJcbmxldCBpc0NoYW5nZVN0eWxlID0gMDtcclxubGV0IGlzT2lsQWN0aXZlID0gMTtcclxubGV0IGFjdGl2ZU9pbFN1YmxheWVycyA9IDg7XHJcbmxldCBhY3RpdmVHYXNTdWJsYXllcnMgPSA4O1xyXG5sZXQgaXNHYXNBY3RpdmUgPSAxO1xyXG5sZXQgaXNab25lQWN0aXZlID0gMTtcclxuXHJcbm1hcGJveGdsLmFjY2Vzc1Rva2VuID0gcHJvY2Vzcy5lbnYuTUFQQk9YX1RPS0VOO1xyXG5jb25zdCBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcclxuICBjb250YWluZXI6IFwibWFwXCIsXHJcbiAgc3R5bGU6IFwibWFwYm94Oi8vc3R5bGVzL3NoaXJzaG9kaXB0by9jbGMzNW50ZnIwMDUxMTRtcDNpNGZkM2k3XCIsXHJcbiAgY2VudGVyOiBbMTEuMTcyODgzLCAyMC43MjA1NzldLFxyXG4gIHpvb206IDEuMixcclxufSk7XHJcblxyXG4vLyBFU0xJTlRcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxlZ2VuZHMoZSkge1xyXG4gIGNvbnN0IGxlZ2VuZE5hbWUgPSBlLnRhcmdldC5pZDtcclxuICBjb25zdCBhbGxMZWdlbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdltkYXRhSWRdXCIpO1xyXG4gIGFsbExlZ2VuZHMuZm9yRWFjaCgobGVnZW5kKSA9PiB7XHJcbiAgICBpZiAobGVnZW5kLmdldEF0dHJpYnV0ZShcImRhdGFJZFwiKSAhPT0gbGVnZW5kTmFtZSkge1xyXG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZWdlbmQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQb3BVcChlKSB7XHJcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBlLmZlYXR1cmVzWzBdLmdlb21ldHJ5LmNvb3JkaW5hdGVzLnNsaWNlKCk7XHJcbiAgY29uc3QgZGl2ID0gY3JlYXRlQ29uZmxpY3RQb3BVcChlLmZlYXR1cmVzWzBdLnByb3BlcnRpZXMpO1xyXG5cclxuICB3aGlsZSAoTWF0aC5hYnMoZS5sbmdMYXQubG5nIC0gY29vcmRpbmF0ZXNbMF0pID4gMTgwKSB7XHJcbiAgICBjb29yZGluYXRlc1swXSArPSBlLmxuZ0xhdC5sbmcgPiBjb29yZGluYXRlc1swXSA/IDM2MCA6IC0zNjA7XHJcbiAgfVxyXG5cclxuICBuZXcgbWFwYm94Z2wuUG9wdXAoKS5zZXRMbmdMYXQoY29vcmRpbmF0ZXMpLnNldERPTUNvbnRlbnQoZGl2KS5hZGRUbyhtYXApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMYXllckRhdGFzKG1haW4sIGlzQWRkKSB7XHJcbiAgY29uc3QgbWFpbkxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWFpbik7XHJcbiAgaWYgKG1haW4gPT09IFwib2lsLXBpcGVsaW5lc1wiKSB7XHJcbiAgICBpZiAoaXNBZGQpIHtcclxuICAgICAgYWN0aXZlT2lsU3VibGF5ZXJzICs9IDE7XHJcbiAgICAgIG1haW5MYXllci5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xyXG4gICAgICBpc09pbEFjdGl2ZSA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhY3RpdmVPaWxTdWJsYXllcnMgLT0gMTtcclxuICAgICAgaWYgKGFjdGl2ZU9pbFN1YmxheWVycyA9PT0gMCkge1xyXG4gICAgICAgIG1haW5MYXllci5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgIGlzT2lsQWN0aXZlID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAobWFpbiA9PT0gXCJnYXMtcGlwZWxpbmVzXCIpIHtcclxuICAgIGlmIChpc0FkZCkge1xyXG4gICAgICBhY3RpdmVHYXNTdWJsYXllcnMgKz0gMTtcclxuICAgICAgbWFpbkxheWVyLmNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XHJcbiAgICAgIGlzR2FzQWN0aXZlID0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFjdGl2ZUdhc1N1YmxheWVycyAtPSAxO1xyXG4gICAgICBpZiAoYWN0aXZlR2FzU3VibGF5ZXJzID09PSAwKSB7XHJcbiAgICAgICAgbWFpbkxheWVyLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgaXNHYXNBY3RpdmUgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYW5hZ2VTdWJsYXllcnMoYVN1YkxheWVyKSB7XHJcbiAgY29uc3Qgc3VibGF5ZXIgPSBhU3ViTGF5ZXIuaWQ7XHJcbiAgY29uc3QgbWFpbiA9IGFTdWJMYXllci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwibWFpbkxheWVyXCIpO1xyXG4gIGNvbnN0IHZpc2liaWxpdHkgPSBtYXAuZ2V0TGF5b3V0UHJvcGVydHkoc3VibGF5ZXIsIFwidmlzaWJpbGl0eVwiKTtcclxuICBpZiAodmlzaWJpbGl0eSA9PT0gXCJ2aXNpYmxlXCIgfHwgdmlzaWJpbGl0eSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB1cGRhdGVMYXllckRhdGFzKG1haW4sIGZhbHNlKTtcclxuICAgIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eShzdWJsYXllciwgXCJ2aXNpYmlsaXR5XCIsIFwibm9uZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdXBkYXRlTGF5ZXJEYXRhcyhtYWluLCB0cnVlKTtcclxuICAgIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eShzdWJsYXllciwgXCJ2aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1haW5MYXllckhlbHBlcihpc0FjdGl2ZSwgbWFpbkxheWVyTmFtZSwgbWFpbkxheWVySW5wdXRzKSB7XHJcbiAgaWYgKGlzQWN0aXZlID09PSAxKSB7XHJcbiAgICBtYWluTGF5ZXJJbnB1dHMuZm9yRWFjaCgoYW5JbnB1dCkgPT4ge1xyXG4gICAgICBhbklucHV0LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgdXBkYXRlTGF5ZXJEYXRhcyhtYWluTGF5ZXJOYW1lLCBmYWxzZSk7XHJcbiAgICAgIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eShhbklucHV0LmlkLCBcInZpc2liaWxpdHlcIiwgXCJub25lXCIpO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1haW5MYXllcklucHV0cy5mb3JFYWNoKChhbklucHV0KSA9PiB7XHJcbiAgICAgIGFuSW5wdXQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIHVwZGF0ZUxheWVyRGF0YXMobWFpbkxheWVyTmFtZSwgdHJ1ZSk7XHJcbiAgICAgIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eShhbklucHV0LmlkLCBcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVNYWluTGF5ZXIoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGxvYWRpbmcuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgY29uc3QgY2xpY2tlZExheWVyID0gZS50YXJnZXQuaWQ7XHJcblxyXG4gIGlmIChjbGlja2VkTGF5ZXIgPT09IFwib2lsLXBpcGVsaW5lc1wiKSB7XHJcbiAgICB0b2dnbGVNYWluTGF5ZXJIZWxwZXIoaXNPaWxBY3RpdmUsIGNsaWNrZWRMYXllciwgb2lsU3ViTGF5ZXJzKTtcclxuICB9IGVsc2UgaWYgKGNsaWNrZWRMYXllciA9PT0gXCJnYXMtcGlwZWxpbmVzXCIpIHtcclxuICAgIHRvZ2dsZU1haW5MYXllckhlbHBlcihpc0dhc0FjdGl2ZSwgY2xpY2tlZExheWVyLCBnYXNTdWJMYXllcnMpO1xyXG4gIH0gZWxzZSBpZiAoY2xpY2tlZExheWVyID09PSBcImNvbmZsaWN0ZWQtem9uZXNcIikge1xyXG4gICAgaWYgKGlzWm9uZUFjdGl2ZSA9PT0gMCkge1xyXG4gICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XHJcbiAgICAgIGlzWm9uZUFjdGl2ZSA9IDE7XHJcbiAgICAgIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eShcclxuICAgICAgICBtYXBJZHNbXCJjb25mbGljdGVkLXpvbmVzXCJdWzBdLFxyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiLFxyXG4gICAgICAgIFwidmlzaWJsZVwiXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgIGlzWm9uZUFjdGl2ZSA9IDA7XHJcbiAgICAgIG1hcC5zZXRMYXlvdXRQcm9wZXJ0eShcclxuICAgICAgICBtYXBJZHNbXCJjb25mbGljdGVkLXpvbmVzXCJdWzBdLFxyXG4gICAgICAgIFwidmlzaWJpbGl0eVwiLFxyXG4gICAgICAgIFwibm9uZVwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMgTUFJTiBXT1JLRkxPVyAjIyMjIyMjIyMjIyMjXHJcblxyXG5vaWxTdWJMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcclxuICBsYXllci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbG9hZGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIG1hbmFnZVN1YmxheWVycyhsYXllcik7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZ2FzU3ViTGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiB7XHJcbiAgbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBsb2FkaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgbWFuYWdlU3VibGF5ZXJzKGxheWVyLCBlKTtcclxuICB9KTtcclxufSk7XHJcblxyXG52aWV3SW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChsYXllcikgPT4ge1xyXG4gICAgbG9hZGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIGNvcHlyaWdodENoaWxkcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICBpZiAoaW5wdXQudmFsdWUgPT09IFwibW9ub2Nocm9tZVwiKSB7XHJcbiAgICAgICAgY2hpbGQuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlucHV0LnZhbHVlID09PSBcInNhdGVsbGl0ZVwiKSB7XHJcbiAgICAgICAgY2hpbGQuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbWFwLnNldFN0eWxlKGxheWVyLnRhcmdldC5pZCk7XHJcbiAgICBpc0NoYW5nZVN0eWxlID0gMTtcclxuICB9KTtcclxufSk7XHJcblxyXG5hbGxMYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcclxuICBsYXllci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTWFpbkxheWVyKTtcclxufSk7XHJcblxyXG5sZWdlbmRzSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZUxlZ2VuZHMpO1xyXG59KTtcclxuXHJcbm1hcC5vbihcImxvYWRcIiwgKCkgPT4ge1xyXG4gIGxvYWRpbmcuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgY3VycmVudExheWVyID0gbWFwLnN0eWxlLl9sYXllcnM7XHJcbiAgT2JqZWN0LnZhbHVlcyhtYXBJZHMpLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICB2YWx1ZS5mb3JFYWNoKChsYXllcikgPT4ge1xyXG4gICAgICBtYXAuc2V0TGF5b3V0UHJvcGVydHkobGF5ZXIsIFwidmlzaWJpbGl0eVwiLCBcInZpc2libGVcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcblxyXG5tYXAub24oXCJpZGxlXCIsICgpID0+IHtcclxuICBtYXBTdHlsZXNEaXYuY2xhc3NOYW1lID0gXCJcIjtcclxuICBzaG93TGVnZW5kcy5jbGFzc05hbWUgPSBcIlwiO1xyXG4gIGxheWVycy5jbGFzc05hbWUgPSBcIlwiO1xyXG4gIGlmIChsZWdlbmRzSW5wdXRzWzBdLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgIGNvbmZsaWN0Wm9uZXNMZWdlbmRzLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgdGhlIG1hcCBoYXMgY2hhbmdlZCBzdHlsZSwgbG9hZFxyXG4gIC8vIHByZXZpb3VzIHN0eWxlcyBsYXllcnNcclxuICBpZiAoaXNDaGFuZ2VTdHlsZSA9PT0gMSkge1xyXG4gICAgaXNDaGFuZ2VTdHlsZSA9IDA7XHJcbiAgICBPYmplY3QudmFsdWVzKG1hcElkcykuZm9yRWFjaCgobWFpbkxheWVyKSA9PiB7XHJcbiAgICAgIG1haW5MYXllci5mb3JFYWNoKChzdWJsYXllcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByZXZWaXMgPSBjdXJyZW50TGF5ZXJbYCR7c3VibGF5ZXJ9YF0udmlzaWJpbGl0eTtcclxuICAgICAgICBtYXAuc2V0TGF5b3V0UHJvcGVydHkoc3VibGF5ZXIsIFwidmlzaWJpbGl0eVwiLCBwcmV2VmlzKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGN1cnJlbnRMYXllciA9IG1hcC5zdHlsZS5fbGF5ZXJzO1xyXG4gIH1cclxuICBsb2FkaW5nLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gIGNvbnNvbGUubG9nKFwiaWRsZVwiKTtcclxufSk7XHJcblxyXG4vLyBhZGQgcG9wdXAgZmVhdHVyZXNcclxubWFwLm9uKFwiY2xpY2tcIiwgXCJjb25mbGljdGVkLXpvbmVzXCIsIChlKSA9PiB7XHJcbiAgZGlzcGxheVBvcFVwKGUpO1xyXG59KTtcclxuXHJcbm1hcC5vbihcIm1vdXNlZW50ZXJcIiwgXCJjb25mbGljdGVkLXpvbmVzXCIsICgpID0+IHtcclxuICBtYXAuZ2V0Q2FudmFzKCkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbn0pO1xyXG5cclxubWFwLm9uKFwibW91c2VsZWF2ZVwiLCBcImNvbmZsaWN0ZWQtem9uZXNcIiwgKCkgPT4ge1xyXG4gIG1hcC5nZXRDYW52YXMoKS5zdHlsZS5jdXJzb3IgPSBcIlwiO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9