// components/Auth/Login.js
import { useState, useEffect } from 'react';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for React routing in react-router-dom v6
import { auth } from '../Firebase/Firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate(); // Use useNavigate for React routing in react-router-dom v6

  const controls = useAnimation();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setSuccessMessage('Login successful!');
      
      // Redirect to another component/page on successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError('Failed to log in');
    }
  };

  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 0.5 } });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h1 className="text-3xl mb-4 text-center text-black">Login</h1>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Login
        </button>
        {successMessage && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-green-500 mt-2"
          >
            {successMessage}
          </motion.p>
        )}
        {error && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-red-500 mt-2"
          >
            {error}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Login;
