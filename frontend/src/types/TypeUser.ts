export type User  = {
    id: string;
    name: string;
    cpf: string;
    email: string;
}

export type TypeAuthContext = {
    user: User | null;
    token: string | null;
    signup: (user: User, token: string)=> void;
    login: (user: User, token: string)=> void;
    logout: ()=> void;
}