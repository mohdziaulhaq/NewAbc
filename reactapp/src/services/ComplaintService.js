import axios from 'axios';

const BASE_URL = 'http://localhost:9090/Complaint/';

class ComplaintService {
    bookComplaints(complaint){
        return axios.post(BASE_URL+"bookComplaint/",complaint);
    }

    getClientComplaints(client){
        return axios.post(BASE_URL+"getClientAllComplaints",client);
    }

    
}

export default new ComplaintService();