import axios from 'axios';

const BASE_URL = 'http://localhost:9090/Client/';

class ClientService {
    changeStatusClient(complaintId){
        return axios.put(BASE_URL+"changeStatusOfComplaint/"+complaintId);
    }

    saveClient(client){
        return axios.put(BASE_URL+"saveClient/",client);
    }
}

export default new ClientService();