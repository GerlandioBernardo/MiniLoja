import { FaStar, FaStarHalfAlt, FaShoppingCart } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import type { Product } from "../../types/TypeProduct";
import { getProducts } from "../../services/productService";
import { toast } from "react-toastify";
import { addToCart } from "../../services/userService";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=> {
    async function fetchProducts(){
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        toast.error("Error when searching for products");
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if(loading){
   return (
    <div className="flex justify-center items-center h-[100vh]">
      <p className="font-bold text-gray-400">Loading products...</p>
    </div>
   )
  }

  async function handleToCart(productId: string){
    try {
      const res = await addToCart(productId);
      toast.success(res.data.message);
    } catch (error: any) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }

    setProducts(prev =>
      prev.map(p => 
        p.id === productId ? { ...p, stock: p.stock - 1 } : p
      )
    )
  }

  return (
    <div>
      <Header />
      <section className='flex justify-center items-center mt-10'>
        <div className='grid grid-cols-4 justify-items-center gap-7 pl-5 pr-5'>
          
          {products.map(product => {
            const fullStars = Math.floor(product.rating);
            const halfStar = product.rating % 1 >= 0.5;
            const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

            return (
              <div key={product.id} className='bg-white h-auto rounded-lg p-3 shadow-md'>
                <div>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className='pt-2'>
                  <h1 className='font-bold italic text-gray-500'>
                    {product.title}
                  </h1>
                </div>
                <div className='flex items-center text-yellow-400 mt-3 text-[20px]'>
                  {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`star-full-${i}`} />
                  ))}
                  {halfStar && <FaStarHalfAlt />}
                  {[...Array(emptyStars)].map((_, i) => (
                    <AiOutlineStar key={`star-empty-${i}`} />
                  ))}
                  <span className="ml-2 text-gray-600 text-sm">{product.rating}</span>
                </div>

                <div className='mt-5'>
                  <button 
                  onClick={()=>  handleToCart(product.id)}
                  disabled={product.stock === 0}
                  className={`bg-blue-400 flex items-center text-white gap-2 px-4 
                  py-2 rounded transition
                  ${product.stock === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-500 cursor-pointer"} `}>
                    <FaShoppingCart />
                    {product.stock === 0 ? "Indisponível" : "Adicionar" }
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
