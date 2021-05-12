import axios from 'axios';

const BASE_URL = 'http://localhost:9090/Client/';

class ClientService {
    changeStatusClient(complaintId){
        return axios.put(BASE_URL+"changeStatusOfComplaint/"+complaintId).then().catch((err)=>{
            console.log(err);
        });
    }

    saveClient(client){
        return axios.put(BASE_URL+"saveClient/",client);
    }

    getClient(clientId){
        return axios.get(BASE_URL+"getClientByClientId/"+clientId);
    }

    getEngineer(engineerId){
        return axios.get(BASE_URL+"getEngineerById/"+engineerId);
    }
}

export default new ClientService();