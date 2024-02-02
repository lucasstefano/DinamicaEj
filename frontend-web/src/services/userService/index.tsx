import api from "../api";

interface dataLogin {
    email: string;
    password: string;
}

interface dataRegister {
    email:string
    password:string
    Name: string
}

export default {
    async login(data: dataLogin){
        try {

            const response = api.post("/users/", data, {
            });
            return response;
            
        } catch (e) {
            console.log(e)
        }
    },

    async register(data: dataRegister) {
        try {
            const response = api.post("/users", data);
            return response;
        } catch (e) {
            console.log(e)
        }
    },
    async getUser(){
        try {
            const response =api.get('/users/:id');
            return response;
            
        } catch (e) {
            console.log(e)
        }
    },
    async getCourses(){
        try {
            const response =api.get('/courses');
            return response;
            
        } catch (e) {
            console.log(e)
        }
    },
    async getLessonsID(){
        try {
            const response =api.get('/lessons/:id');
            return response;
            
        } catch (e) {
            console.log(e)
        }
    },
    async getMyCourses(){
        try {
            const response =api.get('/mycourses/:id');
            return response;
            
        } catch (e) {
            console.log(e)
        }
    },
   
}