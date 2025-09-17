import Header from '../../components/Header'
import iconProfile from "../../assets/homem.png";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { useAuth } from '../../hook/useAuth';
import { deleteUserAccount } from '../../services/userService';
import {useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';

import { 
  PageContainer,
  Card, 
  ProfileImageContainer, 
  ButtonGroup, 
  UserName,
  Button, 
  UserInfo,StyledLink } from "./Profile.styles";

export default function Profile() {

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function maskCpf(cpf: string | undefined) {
    if (!cpf) return null;

    const lastTwo = cpf.slice(-2);
    return `***.***.***-${lastTwo}`;
  }

  async function handleDeleteAccount() {
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
      <PageContainer>
        <Card key={user?.id}>
          <ProfileImageContainer>
            <img src={iconProfile} alt="Image Profile" />
          </ProfileImageContainer>
          <UserName>{user?.name}</UserName>

          <UserInfo>{user?.email}</UserInfo>
          <UserInfo>{maskCpf(user?.cpf)}</UserInfo>

          <ButtonGroup>
            <Button variant='delete' onClick={handleDeleteAccount}>
              <FaTrash />
              Delete

            </Button>

            <StyledLink to="/cart" variant="cart">
              <FaShoppingCart /> View Cart
            </StyledLink>
          </ButtonGroup>

        </Card>

      </PageContainer>
    </div>


  )
}
