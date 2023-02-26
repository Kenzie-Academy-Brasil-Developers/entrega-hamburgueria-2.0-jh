import React from "react";


export interface IUser {

    password: string;
    email: string;
    id:number;

}

export interface IProcucts{

    category: string;
    id: number;
    img: string;
    name: string;
    price: number;
    
}

export interface IUserContext {

    setLoading: React.Dispatch<React.SetStateAction<boolean>> ;
    loadiing: boolean ;
    user: IUser | null ;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    logar:  (data: IUser) => Promise<void>;
    products: IProcucts | null;
    buscaProdutos: () => void;
    userLogout: () => void;
}

export interface IDefaltProviderProps{

    children: React.ReactNode;

}

