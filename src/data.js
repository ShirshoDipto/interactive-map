export const mapIds = {
  "conflicted-zones": {
    isActive: true,
    mainLayerId: "conflicted-zones",
    subLayers: [],
  },

  "oil-pipelines": {
    isActive: true,
    mainLayerId: "oil-pipelines",
    subLayers: [
      {
        isActive: true,
        subLayerId: "oil-pipelines-operating",
      },
      {
        isActive: true,
        subLayerId: "oil-pipelines-retired",
      },
      {
        isActive: true,
        subLayerId: "oil-pipelines-cancelled",
      },
      {
        isActive: true,
        subLayerId: "oil-pipelines-construction",
      },
      {
        isActive: true,
        subLayerId: "oil-pipelines-shelved",
      },
      {
        isActive: true,
        subLayerId: "oil-pipelines-proposed",
      },
      {
        isActive: true,
        subLayerId: "oil-pipelines-mothballed",
      },
      {
        isActive: true,
        subLayerId: "oil-pipelines-idle",
      },
    ],
  },

  "gas-pipelines": {
    isActive: true,
    mainLayerId: "gas-pipelines",
    subLayers: [
      {
        isActive: true,
        subLayerId: "gas-pipelines-operating",
      },
      {
        isActive: true,
        subLayerId: "gas-pipelines-retired",
      },
      {
        isActive: true,
        subLayerId: "gas-pipelines-cancelled",
      },
      {
        isActive: true,
        subLayerId: "gas-pipelines-construction",
      },
      {
        isActive: true,
        subLayerId: "gas-pipelines-shelved",
      },
      {
        isActive: true,
        subLayerId: "gas-pipelines-proposed",
      },
      {
        isActive: true,
        subLayerId: "gas-pipelines-mothballed",
      },
      {
        isActive: true,
        subLayerId: "gas-pipelines-idle",
      },
    ],
  },
};
