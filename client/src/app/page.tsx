import Image from "next/image";
import ProductList from "@/components/ProductList";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>;
}) => {
  const { category, q } = await searchParams;

  // filter products ตาม search query
  const filteredProducts = q
    ? products.filter((p) =>
        p.name.toLowerCase().includes(q.toLowerCase())
      )
    : [];

  return (
    <div>
      {/* Banner */}
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>

      {/* ถ้ามี search query ให้โชว์ผลลัพธ์ */}
      {q ? (
        <div className="px-4">
          <h2 className="text-lg font-medium mb-4">
            Showing results for: <span className="text-blue-500">{q}</span>
          </h2>

          {filteredProducts.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
              {filteredProducts.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No results found.</p>
          )}
        </div>
      ) : (
        <ProductList category={category || ""} params="homepage" />
      )}
    </div>
  );
};

export default Homepage;
