import util from '../helpers/util.js';
import bearData from "../helpers/data/bearData.js"



const buildBearCards = () => {
    const bearCards = bearData.getBears();
    let domString = "";
    bearCards.forEach((bears) => {
    domString += '<div class="col-4 mb-2">'
    domString += '<div id="bear-card" class="card mb-4 h-100">';
    domString += `<img src="${bears.image}" class="card-img-top " alt="Picture of Bear seen">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-text text-center">${bears.name}</h5>`;
    domString += `<h6 class="card-text text-center mt-3 mb-3">Record Bear Fish Catching Activity</h6>`;
    domString += `<div class="row w-100 mx-auto" id="fish-buttons">`;
    domString += `<div class="col-6">`;
    domString += `<button type="button" id="${bears.id}" class="btn btn-danger text-white">Attempted Catch</button>`;
    domString += '</div>';
    domString += `<div class="col-6">`;
    domString += `<button type="button" id="${bears.id}" class="btn btn-danger text-white">Successful Catch</button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    });
    util.printToDom("riverBears", domString);
    $(`#${bearCards.id}`).click(fishAttemptEvents);
    $(`#${bearCards.id}`).click(fishCaughtEvents);
};

const fishAttemptEvents = () => {
    console.log("Attempted");
}

const fishCaughtEvents = () => {
    console.log("Caught");
}

 export default { buildBearCards , fishAttemptEvents , fishCaughtEvents };
