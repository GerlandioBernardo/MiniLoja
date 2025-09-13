import styles from "./Login.module.css";
import iconShopVirtual from "../../assets/loja-virtual.png";
import { Link, useNavigate} from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../../services/authService";
import { useAuth } from "../../hook/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login} = useAuth();
  const navigate = useNavigate();

  async function handleLogin(event: React.FormEvent){
    event.preventDefault();

    if (!email || !password) {
      toast.error("To log in, it is required to fill in all the fields.");
      return;
    }

    try {
      const res = await loginUser(email, password);
      login(res.data.user, res.data.token);
      toast.success(res.data.message)

      navigate("/");
      
    } catch (error: any) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }

    setEmail("");
    setPassword("");
  }

  return (
    <section className={styles.container}>
      <div className={styles.form}>

        <div className={styles.logoApp}>
          <div>
            <img className={styles.iconLogo} src={iconShopVirtual} alt='Icon Shop Virtual' />
          </div>
          <div className={styles.nameApp}>
            <span className={styles.firstName}>Mini</span>
            <span className={styles.secondName}>Loja</span>
          </div>
        </div>

        <form onSubmit={handleLogin} >
          <label className={styles.label}>E-mail</label><br></br>
          <input className={styles.input} type="email" 
          placeholder="Enter your email" 
          required 
          value={email}
          onChange={(event)=> setEmail(event.target.value)}
          /><br></br>

          <label className={styles.label}>Password</label><br></br>
          <input className={styles.input} type="password" 
          placeholder="Enter your password" 
          required 
          value={password}
          onChange={(event)=> setPassword(event.target.value)}
          /><br></br>

          <div className={styles.buttonContainer}>
            <button className={styles.button} type="submit">Sign in</button>
          </div>
        </form>
        
        <p className={styles.textSmall}>
          Don't have an account? {" "}
          <Link to="/signup" className={styles.linkSignup}>
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  )
}
