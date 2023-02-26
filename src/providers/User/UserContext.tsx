import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { IUserContext, IUser, IDefaltProviderProps, IProcucts } from "./@typesUser";

import { api } from "../../services/api";

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({children} : IDefaltProviderProps) => {

    const [loadiing , setLoading] = useState <boolean>(false)
    const [user , setUser] = useState <IUser | null>(null)
    const [products , setProducts] = useState <IProcucts | null>(null)

    const navigate = useNavigate()

    const buscaProdutos = async () => {

        try {

            const response = await api.get("/products" , {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`
                }
            } )

            setProducts(response.data)
            navigate( "/shop" )
            
        } catch (error) {

            console.log(error)
            localStorage.clear()
            navigate( "/" )
        }

    }
   
    useEffect(( ) => {
         
        if(localStorage.getItem("@TOKEN")){
            
            buscaProdutos()
        
        }

    },[])

    const logar = async (data : IUser) => {

        try {
    
            const userDados = await api.post("/login" , data)
            setUser(userDados.data.user)
            navigate( "/shop" )
            localStorage.setItem("@TOKEN" , userDados.data.accessToken)
            
        } catch (error) {
            
            console.log(error)

        }
        
    }

    const userLogout = () => {

        localStorage.removeItem("@TOKEN")
        navigate( "/" )

    }



    return(

        <UserContext.Provider value={{
            setLoading , 
            loadiing , 
            user 
            ,setUser , 
            logar , 
            products , 
            buscaProdutos,
            userLogout,
        
        } } >

            {children}

        </UserContext.Provider>
    )
}
