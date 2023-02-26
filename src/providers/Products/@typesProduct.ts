import { IProcucts } from "../User/@typesUser";

export interface Icarrinho{
    name: string ;
    price: number;
    img: string;
    id: number;
}

export interface IProductsContext{

    products: IProcucts[] | IProcucts | null;
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    carrinho: Icarrinho[] | Icarrinho | false;
    setCarrinho: React.Dispatch<React.SetStateAction<false | Icarrinho[]>>

}




