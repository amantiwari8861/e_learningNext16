// export default interface Product {
//     id: string;
//     name: string;
//     price: number;
//     title: string;
//     description: string;
//     category: string;
//     image: string;
//     rating?: {
//         rate: string;
//         count: string;
//     };
// }
import { z } from "zod";

export const ProductSchema = z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    rating: z
        .object({
            rate: z.number(),
            count: z.number(),
        })
        .optional(),
});

type Product = z.infer<typeof ProductSchema>;
export default Product;
