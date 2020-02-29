// import bearData from "../helpers/data/bearData.js"
const bear = [];

const submitEvent = () => {
    document.getElementById("bear-form-submit").addEventListener('click', bearFormEvents);
    
};

const bearFormEvents = (e) => {
    const bearSighting = {
        id: `bear${bear.length + 1}`,
        name: document.getElementById("bear-name-input").value,
        image: document.getElementById("image-url-input").value
    }
    bear.push(bearSighting);   
    console.log(bearSighting);
    document.getElementById("new-bear").reset();
};



export default { submitEvent };