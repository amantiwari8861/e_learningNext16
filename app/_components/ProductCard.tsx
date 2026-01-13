"use client"
import Product from '@/model/Product'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ProductCard = ({ product }: { product: Product }) => {
  const path=usePathname();
  return <>
    <Link href={`${path}/${product.id}`}>
      <Card title={product.description} >
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription >{product.description.substring(0, 60) + "..."}</CardDescription>
          <CardAction className=''>{product.rating?.rate} ⭐</CardAction>
        </CardHeader>
        <CardContent>
          <Image src={product.image} alt={product.description} className='h-56 w-auto object-contain' width={300} height={200} priority />
        </CardContent>
        <CardFooter className='flex justify-around'>
          <Button variant={'secondary'} className='bg-orange-200'>Add to Cart</Button>
          <Button variant={'outline'} className='bg-orange-400'>Buy Now</Button>
        </CardFooter>
      </Card>
    </Link>
  </>;
};

export default ProductCard;
