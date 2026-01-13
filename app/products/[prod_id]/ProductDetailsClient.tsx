"use client";

import { useProductStore } from "@/store/productStore";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProductDetailsClient({
    prod_id,
}: {
    prod_id: string;
}) {
    const router = useRouter();

    const { hasHydrated, getProductById } = useProductStore();

    const product = getProductById(Number(prod_id));

    // ✅ side effect ONLY when product is missing
    useEffect(() => {
        if (!product && hasHydrated) {
            router.replace("/products");
        }
    }, [product, router, hasHydrated]);

    if (!product || !hasHydrated) return null;

    return (
        <section className="flex justify-center p-6">
            <Card className="max-w-sm">
                <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                    <CardDescription>
                        {product.description.slice(0, 60)}...
                    </CardDescription>
                    <CardAction>{product.rating?.rate} ⭐</CardAction>
                </CardHeader>

                <CardContent className="flex justify-center">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={220}
                        className="h-56 object-contain w-auto"
                        priority
                    />
                </CardContent>

                <CardFooter className="flex justify-around">
                    <Button variant="secondary">Add to Cart</Button>
                    <Button variant="outline">Buy Now</Button>
                </CardFooter>
            </Card>
        </section>
    );
}
