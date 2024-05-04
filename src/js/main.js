import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import L from 'leaflet';

const mapa = L.map('mapa', { attributionControl: false, zoomControl: false, }).setView([19.403002229242095, -99.21379860477845], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(mapa);