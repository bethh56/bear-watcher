import bearData from "../helpers/data/bearData.js";
import river from "../components/river.js";
import util from "../helpers/util.js"

const formBuilder = () => {
    let domString = "";
    domString += '<form id="new-bear" class=" mx-auto w-75">';
    domString += '<div class="form-group">';
    domString += '<label for="bear-name">Bear Name</label>';
    domString += '<input type="name" class="form-control" id="bear-name-input" placeholder="Enter Bear Name" aria-describedby="bearName">';
    domString += '</div>';
    domString += '<div class="form-group">';
    domString += '<label for="image-url"></label>Image URL</label>'
    domString += '<input type="imageURL" class="form-control" placeholder="Enter Image-URL" id="image-url-input">';
    domString += '</div>';
    domString += '<div>';
    domString += '<button type="button" id="bear-form-submit" class="bear-form-button btn btn-block text-white">Submit</button>';
    domString += '</div>';
    domString += '</form>';
    
    util.printToDom('form-builder' , domString);
    document.getElementById("bear-form-submit").addEventListener('click', bearFormEvents);
}

const bearFormEvents = (e) => {
    const seenBear = bearData.getBears();
    const bearSighting = {
        id: `bear${seenBear.length + 1}`,
        name: document.getElementById("bear-name-input").value,
        image: document.getElementById("image-url-input").value
    }
    seenBear.push(bearSighting); 
    river.buildBearCards(seenBear);  
    console.log(bearSighting);
    document.getElementById("new-bear").reset();
};



export default { formBuilder, bearFormEvents };