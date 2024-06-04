import * as L from "leaflet";
var CustomMap = (function () {
    function CustomMap() {
        var _this = this;
        this.addUserMarker = function (user) {
            var marker = L.marker([user.location.lat, user.location.lng]).addTo(_this.Map);
            var popup_layer = new L.layerGroup();
            var popup = new L.popup({ offset: new L.Point(0, -30) });
            popup.setLatLng(L.latLng(user.location.lat, user.location.lng));
            popup.setContent('User Loc');
            popup.openPopup();
            popup_layer.addLayer(popup);
            popup_layer.addTo(_this.Map);
        };
        this.addCompanyMarker = function (company) {
            var otherMarker = L.marker([company.location.lat, company.location.lng]).addTo(_this.Map);
            var popup_layer = new L.layerGroup();
            var popup = new L.popup({ offset: new L.Point(0, -30) });
            popup.setLatLng(L.latLng(company.location.lat, company.location.lng));
            popup.setContent('User Loc');
            popup.openPopup();
            popup_layer.addLayer(popup);
            popup_layer.addTo(_this.Map);
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