import React, { useState } from 'react';
import '../../styles/styles.css';
import iconShopVirtual from "../../assets/loja-virtual.png";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [cpf, setCpf] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const cpfNumbers = cpf.replace(/\D/g, "");

        if (username.trim().length < 3) {
            toast.error("Username must be at least 3 characters long");
            return;
        }
        if(cpfNumbers.length !== 11){
            toast.error("Enter a valid CPF with 11 digits");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }

        setEmail("");
        setUsername("");
        setPassword("");
        setCpf("");
    }

    return (
        <section className="signup-container">
            <div className="signup-form">

                <div className="signup-logoApp">
                    <div>
                        <img className="signup-logo" src={iconShopVirtual} alt='Icon Shop Virtual' />
                    </div>
                    <div className="signup-nameApp">
                        <span className="signup-firstName">Mini</span>
                        <span className="signup-secondName">Loja</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <label className="signup-label">Username</label><br></br>
                    <input className="signup-input" type="text"
                        placeholder="Enter your name"
                        required
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    /><br></br>

                     <label className="signup-label">CPF</label><br></br>
                    <input className="signup-input" type="text"
                        placeholder="Enter your cpf"
                        required
                        value={cpf}
                        onChange={(event) => setCpf(event.target.value)}
                    /><br></br>

                    <label className="signup-label">E-mail</label><br></br>
                    <input className="signup-input" type="text"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    /><br></br>

                    <label className="signup-label">Password</label><br></br>
                    <input className="signup-input" type="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    /><br></br>

                    <div className="signup-container-button">
                        <button className="signup-button" type="submit">Sign up</button>
                    </div>
                </form>

                <p className="signup-textSmall">
                    Already have an account?{" "}
                    <Link to="/login" className="signup-link"
                        >
                        Sign In
                    </Link>
                </p>
            </div>
        </section>
    )
}
