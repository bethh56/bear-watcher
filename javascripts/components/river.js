import util from '../helpers/util.js';
//import bearData from "../helpers/data/bearData.js"
import bearForm from '../components/bearForm.js';


const bearCard = () => {
    const bearRiverCard = bearForm.submitEvent();
    
};
console.log("hello" , bearCard());


// const riverCards = () => {
//     const bearCard = bearData.getBear();
//     let domString = "";
//     domString += "test";
//     for (let i = 0; i < bearCard; i++) {
//         domString += `${bearCard[i].name}`;
//     };
//     util.printToDom("riverBears", domString)
// };

 export default { bearCard };