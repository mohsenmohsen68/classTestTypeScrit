import * as L from "leaflet";


// an interface to check if the objects can be showed on the map...
// that means the object has location property or not ...
export interface Mappable {
    location: {
        lat:number;
        lng:number;
    },
    locationText:string;
    popupColor:string;
}
export class CustomMap {
    private Map: L.map;
    constructor() {
        this.Map = L.map('map', {
            center: [0, 0],
            zoom: 2
        });

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.Map);

    }
    addMarker = (mappable: Mappable): void => {
        var popup_layer = new L.layerGroup();
        let popup = new L.popup();
        popup.setLatLng(L.latLng(mappable.location.lat, mappable.location.lng));
        popup.setContent(mappable.locationText,{className: 'custom-style'});
        // popup.style.backgroundColor = mappable.popupColor;
        // popup.openPopup();
        
        // popup.getElement().children[0].style.background = mappable.popupColor;
        popup_layer.addLayer(popup);
        popup_layer.addTo(this.Map)
        var marker = L.marker([mappable.location.lat, mappable.location.lng]).addTo(this.Map).bindPopup(popup).openPopup();;
        marker.getPopup().getElement().children[0].style.background = mappable.popupColor;

       
    }
    
}