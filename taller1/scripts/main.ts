import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById("series-tbody")!;
const averageElm: HTMLElement = document.getElementById("average")!;
const detailContainer: HTMLElement = document.getElementById("serie-detail")!;

mostrarSeries(series);
averageElm.innerHTML = `Seasons average: ${getAverageSeasons(series)}`;

function mostrarSeries(series: any[]): void {
  series.forEach((s) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.id}</td>
      <td class="text-primary text-decoration-underline" style="cursor:pointer">${s.name}</td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;

    // Al hacer clic, muestra el detalle
    tr.querySelector("td:nth-child(2)")!.addEventListener("click", () => mostrarDetalle(s));

    seriesTbody.appendChild(tr);
  });
}

function getAverageSeasons(series: any[]): number {
  const totalSeasons = series.reduce((sum, s) => sum + s.seasons, 0);
  return totalSeasons / series.length;
}

function mostrarDetalle(serie: any): void {
  detailContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" target="_blank" class="btn btn-primary">Ver más</a>
      </div>
    </div>
  `;
}
