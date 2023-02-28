import { IProcucts } from "../User/@typesUser";

export interface Icarrinho{
    category: string;
    name: string ;
    price: number;
    img: string;
    id: number;
}

export interface IProductsContext{

    products: IProcucts[] | null;
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    carrinho: Icarrinho[] | [];
    setCarrinho: React.Dispatch<React.SetStateAction<[] | Icarrinho[]>>;
    filtrados:  Icarrinho[] | false;
     setfiltrados: React.Dispatch<React.SetStateAction<false | Icarrinho[]>>;
}




