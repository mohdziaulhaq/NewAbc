import axios from 'axios';

const BASE_URL = 'http://localhost:9090/Engineer/';

class EngineerService {
    getEngineerComplaints(engineer){
        return axios.post(BASE_URL+"getAllOpenComplaints/"+"Open",engineer);
    }

    getComplaintdate(employee,date){
        return axios.post(BASE_URL+"getResolvedComplaintsByDate/"+ date,employee);
     }
}

export default new EngineerService();