import axios from 'axios';

export class UserAPI {

    static async getAll() {
        const {data} = await axios.get('https://randomuser.me/api/?page=1&results=10');
        return data;
    }

}



