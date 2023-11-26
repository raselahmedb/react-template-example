import Color from "./Color";
import Size from "./Size";
import Weight from './Weight';
import Tag from './Tag';
import Image from "./Image";

export default interface Product {
    id: string;
    name: string;
    title: string;
    description?: string;
    specifications?: string;
    sku?: string;
    tags?: Tag[];
    colors?: Color[];
    sizes?: Size[];
    images: Image[];
    weight?: Weight;
    material?: string;
    price: number;
    discountPrice: number;
    availableQty: number;
}