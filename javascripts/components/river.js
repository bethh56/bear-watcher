import util from '../helpers/util.js';
import bearData from "../helpers/data/bearData.js"



const buildBearCards = () => {
    const bearCards = bearData.getBears();
    let domString = "";
    bearCards.forEach((bears) => {
    domString += '<div class="col-4 mb-2">'
    domString += '<div id="bear-card" class="card h-100 mb-4">';
    domString += `<img src="${bears.image}" class="card-img-top h-75" alt="Picture of Bear seen">`;
    domString += '<div class="card-body">';
    domString += `<h3 class="card-text text-center">${bears.name}</h3>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    });

    util.printToDom("riverBears", domString)
};

 export default { buildBearCards };