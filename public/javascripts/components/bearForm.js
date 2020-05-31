import bearData from "../helpers/data/bearData.js";
import river from "./river.js";
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
    domString += '<input type="imageURL" class="form-control" placeholder="Enter Image-URL" id="image-url-input" required>';
    domString += '</div>';
    domString += '<div>';
    domString += '<button type="button" id="bear-form-submit" class="bear-form-button btn btn-block text-white">Submit</button>';
    domString += '</div>';
    domString += '</form>';
    
    util.printToDom('form-builder' , domString);
    $("#bear-form-submit").click(bearFormEvents);
}

const bearFormEvents = (e) => {
    const seenBear = bearData.getBears();
    const bearSighting = {
        id: `bear${seenBear.length + 1}`,
        name: $("#bear-name-input").val(),
        image: $("#image-url-input").val(),
    }
    seenBear.push(bearSighting); 
    river.buildBearCards(seenBear);  
    document.getElementById("new-bear").reset();
};



export default { formBuilder, bearFormEvents };
