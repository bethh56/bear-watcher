// import printToDom from "../javascripts/helpers/utils.js"
import bearData from "../helpers/data/bearData.js"


const submitEvent = () => {
    document.getElementById("bear-form-submit").addEventListener('click', bearFormEvents);
    
};

const bearFormEvents = (e) => {
    const seenBear = bearData.getBear();
    const bearSighting = {
        id: `bear${seenBear.length + 1}`,
        name: document.getElementById("bear-name-input").value,
        image: document.getElementById("image-url-input").value
    }
    seenBear.push(bearSighting);   
    console.log(bearSighting);
    document.getElementById("new-bear").reset();
};



export default { submitEvent };