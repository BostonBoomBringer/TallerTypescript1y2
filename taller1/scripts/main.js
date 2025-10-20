"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_js_1 = require("./data.js");
var seriesTbody = document.getElementById("series-tbody");
var averageElm = document.getElementById("average");
var detailContainer = document.getElementById("serie-detail");
mostrarSeries(data_js_1.series);
averageElm.innerHTML = "Seasons average: ".concat(getAverageSeasons(data_js_1.series));
function mostrarSeries(series) {
    series.forEach(function (s) {
        var tr = document.createElement("tr");
        tr.innerHTML = "\n      <td>".concat(s.id, "</td>\n      <td class=\"text-primary text-decoration-underline\" style=\"cursor:pointer\">").concat(s.name, "</td>\n      <td>").concat(s.channel, "</td>\n      <td>").concat(s.seasons, "</td>\n    ");
        // Al hacer clic, muestra el detalle
        tr.querySelector("td:nth-child(2)").addEventListener("click", function () { return mostrarDetalle(s); });
        seriesTbody.appendChild(tr);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = series.reduce(function (sum, s) { return sum + s.seasons; }, 0);
    return totalSeasons / series.length;
}
function mostrarDetalle(serie) {
    detailContainer.innerHTML = "\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <a href=\"").concat(serie.link, "\" target=\"_blank\" class=\"btn btn-primary\">Ver m\u00E1s</a>\n      </div>\n    </div>\n  ");
}
