import * as L from "leaflet";
import { User } from "./User";
import { Company } from "./Company";
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
    addUserMarker = (user: User): void => {
        var marker = L.marker([user.location.lat, user.location.lng]).addTo(this.Map);
        var popup_layer = new L.layerGroup();
        //marker.bindPopup('user loc').openPopup();
        let popup = new L.popup({offset:  new L.Point(0, -30)});
   popup.setLatLng(L.latLng(user.location.lat, user.location.lng));
   popup.setContent('User Loc');
   popup.openPopup();
        popup_layer.addLayer(popup);
        popup_layer.addTo(this.Map)
        // this.popUps[0] = L.popup()
        // .setLatLng([user.location.lat, user.location.lng])
        // .setContent("User loc.")
        // .openOn(this.Map);
    }
    addCompanyMarker = (company: Company): void => {
        var otherMarker = L.marker([company.location.lat, company.location.lng]).addTo(this.Map);
        var popup_layer = new L.layerGroup();
        //marker.bindPopup('user loc').openPopup();
        let popup = new L.popup({offset:  new L.Point(0, -30)});
   popup.setLatLng(L.latLng(company.location.lat, company.location.lng));
   popup.setContent('User Loc');
   popup.openPopup();
        popup_layer.addLayer(popup);
        popup_layer.addTo(this.Map)
        //otherMarker.bindPopup('company loc').openPopup();
        // this.popUps[1] = L.popup()
        //     .setLatLng([company.location.lat, company.location.lng])
        //     .setContent("Company loc.")
        //     .openOn(this.Map);
    }
}