export default class API{
    private baseURI: string;
    private endpoint: string;   
    private params: {};

    constructor(baseURI: string, endpoint: string, params: {}){
        this.baseURI = baseURI;
        this.endpoint = endpoint;
        this.params = params; 
    }; 

    getBaseURI(){
        return this.baseURI;    
    }

    getEndpoint(){
        return this.endpoint;
    } 

    getParams(){
        return this.params;  
    }   
}