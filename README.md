# Interactive Data Visualization Map

Project description goes here.

[View Live](https://shirshodipto.github.io/interactive-map)

![](./dist/gifs/interactiveMap2.gif)

## Technologies Used

- Javascript
- Html
- CSS
- Webpack
- [Mapbox GL](https://www.mapbox.com)
- [Mapbox Studio](https://www.mapbox.com)

## Features & Highlights

1. Toggle main layers from top right.
2. Toggle sub layers from addtional options.
3. Switch between canvas styles from top left.
4. Clickable red dots that shows additonal details of Conflicted Zones.
5. Tilt the map. Hold right mouse button and start moving the mouse upwards/downwards.

## Data Sources:

- Conflicted Zones: https://carto.com
- Oil and Gas Pipelines: https://globalenergymonitor.org

## Methodology

The core of this app is the data files that has all the coordinates needed for Mapbox Studio to draw on a canvas. The accepted format for the data files `csv` or `geojson`. After downloading the data files, of `csv` formate, from the abovementined websites, a one time Python's Numpy code is used to edit the files to give them the structure Mapbox Studio requires.

The data files are then uploaded to the Mapbox Studio to create layers, and then add designs, such as the colors and width of the linestrings, diameter of the red dots, etc. The canvas styles are also picked from the Mapbox Studio: one is Monochrome that is good for general data visualization purpose, and the other is Sattelite view.

Once all the layers are ready, Mapbox GL is installed and connected to the styles created with Mapbox Studio to add further interactivity with javascript code.
