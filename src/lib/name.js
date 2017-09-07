// @flow
import axios from 'axios';

async function getGender (name: string) {
    return axios.get(`https://api.genderize.io/?name=${name}`);
}

export { getGender }