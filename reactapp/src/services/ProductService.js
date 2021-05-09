import axios from 'axios';

const BASE_URL = 'http://localhost:9090/Product/';

class ProductService {
    
    addProduct(product){
        return axios.post(BASE_URL+"addProduct",product);
    }
    getProduct(category){
        return axios.get(BASE_URL+"getProduct/"+category);
    }
}

export default new ProductService();