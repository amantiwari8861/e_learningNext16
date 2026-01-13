import ProductDetailsClient from "./ProductDetailsClient";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ prod_id: string }>;
}) {
  const { prod_id } = await params;

  return <ProductDetailsClient prod_id={prod_id} />;
}
