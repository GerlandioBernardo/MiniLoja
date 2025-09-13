import Header from '../../components/Header'
import iconProfile from "../../assets/homem.png";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { useAuth } from '../../hook/useAuth';
import { deleteUserAccount, getUserCart } from '../../services/userService';
import {Link, useNavigate} from  "react-router-dom";
import { toast } from 'react-toastify';

export default function Profile() {

  const {user, logout} = useAuth();
  const navigate = useNavigate();

  function maskCpf(cpf: string | undefined){
    if(!cpf) return null;

    const lastTwo = cpf.slice(-2);
     return `***.***.***-${lastTwo}`;
  }
  
  async function handleDeleteAccount(){
    try {
      
      const res = await deleteUserAccount();
      logout();
      navigate("/signup");
      toast.success(res.data.message);

    } catch (error: any) {
      toast.error(error.response?.data?.message);
      console.log(error)
    }
  }

  return (
    <div>
      <Header />
      <section className='flex justify-center items-center h-[100vh]'>
        <div key={user?.id} className='bg-white shadow-md h-auto w-[300px] grid justify-items-center rounded' >
          <div className='w-29 h-29 rounded-full bg-[#C7C7C7] mt-5 flex
           justify-center items-center'>
            <img src={iconProfile} alt="Image Profile" className='w-17' />
          </div>

          <div className="mt-3">
            <h1 className="font-semibold text-gray-800 text-lg tracking-wide">
              {user?.name}
            </h1>
          </div>
          <div className="bg-white w-[265px] h-[40px] flex items-center justify-center 
            mt-4 text-gray-700 rounded border border-gray-300 shadow-sm">
            {user?.email}
          </div>
          <div className="bg-white w-[265px] h-[40px] flex items-center justify-center 
            mt-4 text-gray-700 rounded border border-gray-300 shadow-sm">
              {maskCpf(user?.cpf)}
          </div>

          <div className='mt-5 mb-5 flex gap-4'>
            <button
            onClick={handleDeleteAccount}
              className='bg-red-500 flex items-center text-white gap-2 px-4 
                  py-1.5 rounded cursor-pointer transition-colors ease-in-out
                  duration-200 transform hover:-translate-y-[1px] hover:scale-[1.01]
                   hover:bg-red-600'>
              <FaTrash />
              Delete
            </button>
            <Link
            to="/cart"
              className='bg-green-600 flex items-center text-white gap-2 px-4 
                  py-1.5 rounded cursor-pointer transition-colors ease-in-out
                  duration-200 transform hover:-translate-y-[1px] hover:scale-[1.01]
                   hover:bg-green-700'>
              <FaShoppingCart />
              View Cart
            </Link>
          </div>

        </div>

      </section>
    </div>
  )
}
