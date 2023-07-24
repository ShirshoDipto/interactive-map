export const layerData = {
  "conflicted-zones": {
    id: "conflicted-zones",
    isActive: true,
    subLayers: [],
  },

  "oil-pipelines": {
    id: "oil-pipelines",
    isActive: true,
    subLayers: [
      {
        id: "oil-pipelines-operating",
        isActive: true,
      },
      {
        id: "oil-pipelines-retired",
        isActive: true,
      },
      {
        id: "oil-pipelines-cancelled",
        isActive: true,
      },
      {
        id: "oil-pipelines-construction",
        isActive: true,
      },
      {
        id: "oil-pipelines-shelved",
        isActive: true,
      },
      {
        id: "oil-pipelines-proposed",
        isActive: true,
      },
      {
        id: "oil-pipelines-mothballed",
        isActive: true,
      },
      {
        id: "oil-pipelines-idle",
        isActive: true,
      },
    ],
  },

  "gas-pipelines": {
    id: "gas-pipelines",
    isActive: true,
    subLayers: [
      {
        id: "gas-pipelines-operating",
        isActive: true,
      },
      {
        id: "gas-pipelines-retired",
        isActive: true,
      },
      {
        id: "gas-pipelines-cancelled",
        isActive: true,
      },
      {
        id: "gas-pipelines-construction",
        isActive: true,
      },
      {
        id: "gas-pipelines-shelved",
        isActive: true,
      },
      {
        id: "gas-pipelines-proposed",
        isActive: true,
      },
      {
        id: "gas-pipelines-mothballed",
        isActive: true,
      },
      {
        id: "gas-pipelines-idle",
        isActive: true,
      },
    ],
  },
};

export const mapStyles = {
  Monochrome: {
    id: "mapbox://styles/shirshodipto/clc35ntfr005114mp3i4fd3i7",
    isActive: true,
  },
  Satellite: {
    id: "mapbox://styles/shirshodipto/clcluk93l003z15oed6tkuwfo",
    isActive: false,
  },
};
