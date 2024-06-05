import * as L from "leaflet";
var CustomMap = (function () {
    function CustomMap() {
        var _this = this;
        this.addMarker = function (mappable) {
            var popup_layer = new L.layerGroup();
            var popup = new L.popup();
            popup.setLatLng(L.latLng(mappable.location.lat, mappable.location.lng));
            popup.setContent(mappable.locationText, { className: 'custom-style' });
            popup_layer.addLayer(popup);
            popup_layer.addTo(_this.Map);
            var marker = L.marker([mappable.location.lat, mappable.location.lng]).addTo(_this.Map).bindPopup(popup).openPopup();
            ;
            marker.getPopup().getElement().children[0].style.background = mappable.popupColor;
        };
        this.Map = L.map('map', {
            center: [0, 0],
            zoom: 2
        });
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.Map);
    }
    return CustomMap;
}());
export { CustomMap };
//# sourceMappingURL=CustomMap.js.map