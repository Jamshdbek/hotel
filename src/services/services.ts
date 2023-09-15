 import request from "./index"
class ServicesApi {
    static SignUp = (params:any) =>{
        return request.post('/user/api/v1/auth/sign-up', {...params})
    }
    static Login = (params:any) =>{
        return request.get('/user/api/v1/auth/login' , {params})
    }
    static Verify = (params:{code:string}) =>{
        return request.post('/user/api/v1/auth/:id/verify', {params})
    }
}

export default ServicesApi;