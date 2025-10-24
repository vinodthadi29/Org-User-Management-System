import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../lib/api'; // Adjust the import path as necessary
import styles from '../styles/Login.module.css'; // Adjust the import path as necessary

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await login({ email, password });
            router.push('/dashboard'); // Redirect to dashboard on successful login
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;