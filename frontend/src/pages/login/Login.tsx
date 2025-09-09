import styles from "./Login.module.css";
import iconShopVirtual from "../../assets/loja-virtual.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent){
    event.preventDefault();

    if (!email || !password) {
      return;
    }

    console.log("Email: ", email);
    console.log("Password: ", password)

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

        <form onSubmit={handleSubmit} >
          <label className={styles.label}>E-mail</label><br></br>
          <input className={styles.input} type="text" 
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
