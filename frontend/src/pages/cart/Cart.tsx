import { FaStar, FaStarHalfAlt, FaTrash, FaCheck, FaBoxOpen } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import type { Cart, } from "../../types/TypeCart";
import { deleteToCart, getUserCart } from "../../services/userService";
import { toast } from "react-toastify";
import Header from "../../components/Header";

export default function Cart() {
  const [products, setProducts] = useState<Cart[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchCart() {
      try {
        const data = await getUserCart();
        setProducts(data.cart || []);
      } catch (error: any) {
        toast.error(error.response?.data?.message);
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <p className="font-bold text-gray-400">Loading cart...</p>
      </div>
    )
  }

  async function handleDeleteToCart(cartId: string, productId: string) {
    try {
      const res = await deleteToCart(cartId, productId);
      setProducts(prevProduct => prevProduct.filter(item => item.id !== cartId));
      toast.success(res.data.message);
    } catch (error: any) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }
  }

  return (
    <div>
      <Header />
      <section className='flex justify-center items-center mt-10'>
        {products.length === 0 ? (
            <div className="flex justify-center items-center gap-4 text-gray-400 mt-20">
              <FaBoxOpen size={60} />
              <p className="text-gray-500 text-lg">Your cart is empty</p>
            </div>
          ) : (
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            justify-items-center gap-7 pl-5 pr-5'>
              {products.map(cart => {
                const fullStars = Math.floor(cart.product.rating);
                const halfStar = cart.product.rating % 1 >= 0.5;
                const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

                return (
                  <div key={cart.product.id} className='bg-white h-auto rounded-lg p-3 shadow-md max-w-[310px]'>
                    <div>
                      <img src={cart.product.image} alt={cart.product.title} />
                    </div>
                    <div className='pt-2'>
                      <h1 className='font-bold italic text-gray-500'>
                        {cart.product.title}
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
                      <span className="ml-2 text-gray-600 text-sm">{cart.product.rating}</span>
                    </div>

                    <div className='mt-5 flex items-center gap-5'>
                      <button
                        onClick={() => handleDeleteToCart(cart.id, cart.product.id)}
                        className='bg-red-500 flex items-center text-white gap-2 px-4 
                  py-1.5 rounded cursor-pointer hover:bg-red-600'>
                        <FaTrash />
                        Delete
                      </button>

                      <button
                        className='bg-green-500 flex items-center text-white gap-2 px-4 
                  py-1.5 rounded cursor-pointer hover:bg-green-600'>
                        <FaCheck />
                        Confirm
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        }
      </section>
    </div>
  );
}
