import { series } from './data.js';
import { Serie } from './serie.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let averageSeasonsElm: HTMLElement = document.getElementById('average-seasons')!;

renderSeriesTable(series);
averageSeasonsElm.innerHTML = `${getAverageSeasons(series)}`;

function renderSeriesTable(series: Serie[]): void {
  series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                           <td><a href="${s.webpage}" target="_blank">${s.name}</a></td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach(s => totalSeasons += s.seasons);
  return totalSeasons / series.length;
}
