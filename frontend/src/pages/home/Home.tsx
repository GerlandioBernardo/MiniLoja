import { FaStar, FaStarHalfAlt, FaShoppingCart } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Header from "../../components/Header";
import { products } from "../../mock/Products";

export default function Home() {

  function addToCart(id: number){
    const item = products.find(product => product.id === id);
    console.log(item?.title);
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
                  onClick={()=> addToCart(product.id)}
                  className='bg-blue-400 flex items-center text-white gap-2 px-4 
                  py-2 rounded cursor-pointer hover:bg-blue-500'>
                    <FaShoppingCart />
                    Adicionar
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
