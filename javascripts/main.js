import bearForm from './components/bearForm.js';
import river from './components/river.js';

const init = () => {
    bearForm.formBuilder();
    river.buildBearCards();
}

init();