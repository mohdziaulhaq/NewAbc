import axios from 'axios';

const BASE_URL = 'http://localhost:9090/Admin/';

class AdminService {
    getComplaintsByProduct(product_category){
        return axios.get(BASE_URL+"getComplaintsByProducts/"+product_category);
    }

    addEngineer(engineer){
        return axios.post(BASE_URL+"addEngineer/",engineer)
    }

    getAdmin(id){
        return axios.get(BASE_URL+"viewAdmin"+id);
    }

    getComplaints(){
        return axios.get(BASE_URL+"getAllComplaints")
    }
    getOpenComplaints(){
        return axios.get(BASE_URL+"getAllOpenComplaints")
    }
    getProducts(){
        return axios.get(BASE_URL+"getAllProducts")
    }
}

export default new AdminService();