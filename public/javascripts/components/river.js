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
    domString += `<div class="row w-100 mx-auto" id="fish-buttons">`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    });
    util.printToDom("riverBears", domString);
};

 export default { buildBearCards };
