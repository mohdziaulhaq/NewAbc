import axios from 'axios';

const BASE_URL = 'http://localhost:9090/Admin/';

class AdminService {
    getComplaintsByProduct(product_category){
        return axios.get(BASE_URL+"getComplaintsByProducts/"+product_category);
    }

    addEngineer(engineer){
        return axios.post(BASE_URL+"addEngineer/",engineer)
    }
}

export default new AdminService();