import util from '../helpers/util.js';
import bearData from "../helpers/data/bearData.js"



const buildBearCards = () => {
    const bearCards = bearData.getBears();
    let domString = "";
    bearCards.forEach((bears) => {
    domString += '<div class="col-4">'
    domString += '<div class="card mb-4">';
    domString += `<img src="${bears.image}" class="card-img-top" alt="Picture of Bear seen">`;
    domString += '<div class="card-body">';
    domString += `<p class="card-text">${bears.name}</p>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    });

    util.printToDom("riverBears", domString)
};

 export default { buildBearCards };