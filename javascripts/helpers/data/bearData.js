import bearForm from '../../components/bearForm.js';

const bearInput = bearForm.submitEvent();
const bear = [];

const bearPush = () => {
    bearInput.push(bear);   
    console.log(bear);
}

bearPush();

const getBear = () => {
    return bear
}

getBear();

export default { getBear }