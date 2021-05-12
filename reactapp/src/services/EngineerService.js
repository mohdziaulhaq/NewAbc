import axios from 'axios';

const BASE_URL = 'http://localhost:9090/Engineer/';

class EngineerService {
    getEngineerComplaints(engineer){
        return axios.post(BASE_URL+"getAllOpenComplaints/"+"Open",engineer);
    }

    getComplaintdate(employee,date){
        return axios.post(BASE_URL+"getResolvedComplaintsByDate/"+ date,employee);
     }

     getResolvedComplaints(engineer){
         return axios.post(BASE_URL+"getResolvedComplaints/",engineer);
     }

     getEngineer(engineer){
         return axios.post(BASE_URL+"engineerSignIn/",engineer);
     }
}

export default new EngineerService();