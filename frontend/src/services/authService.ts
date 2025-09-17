import api from "./api";

export async function signupUser(name: string, cpf: string, email: string, password: string){
    const response = await api.post("/auth/signup", {
        name, cpf, email, password
    })

    return response
}

export async function loginUser(email: string, password: string){
    const response = await api.post("/auth/login", {
       email, password
    })

    return response;
}