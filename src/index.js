
import mapboxgl from 'mapbox-gl';




// MAIN FUNCTION


mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpcnNob2RpcHRvIiwiYSI6ImNsYnlraHR4dDB1Njgzb2xobHZrMG1kY2gifQ.ndu_e63-o0H8MAWnvQ3EWA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shirshodipto/clc35ntfr005114mp3i4fd3i7',
    center: [11.172883, 39.720579], // 11.172883, 39.720579
    zoom: 1.48,
});


const inputs = document.querySelectorAll('#menu input');
console.log(inputs);
 
for (const input of inputs) {
    input.onclick = (layer) => {
        const layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
    };
}




// access token: 
// pk.eyJ1Ijoic2hpcnNob2RpcHRvIiwiYSI6ImNsYnlraHR4dDB1Njgzb2xobHZrMG1kY2gifQ.ndu_e63-o0H8MAWnvQ3EWA

// map urls:
// 1. monochrome: mapbox://styles/shirshodipto/clc35ntfr005114mp3i4fd3i7
// 2. Satelite: mapbox://styles/shirshodipto/clc49j0ir000y14quh4lr05ek