// import printToDom from "../javascripts/helpers/utils.js"

const submitEvent = () => {
    document.getElementById("bear-form-submit").addEventListener('click', bearFormEvents);
    
};

const bearFormEvents = () => {   
    console.log("things are setup")
};


export default { submitEvent };