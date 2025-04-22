export default async function Product({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;

  return <div>{product}</div>;
}
