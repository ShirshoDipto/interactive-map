
import mapboxgl from 'mapbox-gl';


function toggleLayer(e) {
    e.preventDefault();
    e.stopPropagation();
    const clickedLayer = e.target.id;
    console.log(clickedLayer);
    const visibility = map.getLayoutProperty(clickedLayer, 'visibility');

    if (visibility === 'visible' || visibility === undefined) {
        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
    } 
    else {
        this.className = 'active';
        map.setLayoutProperty(clickedLayer,'visibility','visible');
    }
}





// MAIN FUNCTION

const allLayers = document.querySelectorAll('#layers a');

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpcnNob2RpcHRvIiwiYSI6ImNsYnlraHR4dDB1Njgzb2xobHZrMG1kY2gifQ.ndu_e63-o0H8MAWnvQ3EWA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shirshodipto/clc35ntfr005114mp3i4fd3i7',
    center: [11.172883, 39.720579],
    zoom: 1.48,
});


map.on('idle', () => {
    console.log('reached idle');

    allLayers.forEach((layer) => {
        layer.onclick = toggleLayer;
    })
});

const inputs = document.querySelectorAll('#map-styles input');
 
for (const input of inputs) {
    input.onclick = (layer) => {
        map.setStyle(layer.target.id);
    };
}

function helloJi(e) {
    console.log('hi there');
}




// access token: 
// pk.eyJ1Ijoic2hpcnNob2RpcHRvIiwiYSI6ImNsYnlraHR4dDB1Njgzb2xobHZrMG1kY2gifQ.ndu_e63-o0H8MAWnvQ3EWA

// map urls:
// 1. monochrome: mapbox://styles/shirshodipto/clc35ntfr005114mp3i4fd3i7
// 2. Satelite: mapbox://styles/shirshodipto/clc49j0ir000y14quh4lr05ek

// const satellite = 

