import axios from 'axios';

const BASE_URL = 'http://localhost:9090/Admin/';

class AdminService {
    getComplaintsByProduct(product_category){
        return axios.get(BASE_URL+"getComplaintsByProducts/"+product_category);
    }
    
    getAdmin(adminId){
        return axios.get(BASE_URL+"viewAdmin/"+adminId);
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
    changeEngineer(complaintId){
        return axios.put(BASE_URL+"replaceEngineerFromComplaint/"+complaintId)
    }
    getEngineerByDomain(domain){
        return axios.get(BASE_URL+"getEngineerByDomain/"+domain)
    }
    changeEngineerDomain(engineerId,newDomain){
        return axios.put(BASE_URL+"changeDomain/"+engineerId+"/"+newDomain)
    }
    addEngineer(engineer){
        return axios.post(BASE_URL+"addEngineer",engineer)
    }
}

export default new AdminService();