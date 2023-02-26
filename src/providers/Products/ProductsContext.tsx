import { createContext, useContext, useState } from "react";
import { IProductsContext } from "./@typesProduct";
import { IDefaltProviderProps } from "../User/@typesUser";
import { UserContext } from "../User/UserContext";



export const productsContext = createContext({} as IProductsContext)


export const ProductsProvider = ({children} : IDefaltProviderProps) => {

    const { products } = useContext(UserContext)

    const [modalOpen , setModalOpen] = useState(false)

    return(

        <productsContext.Provider value={{products, modalOpen , setModalOpen}}>

            {children}

        </productsContext.Provider>

    )

}