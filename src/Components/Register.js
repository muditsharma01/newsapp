import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { motion, useAnimation } from 'framer-motion';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const auth = getAuth();
  const controls = useAnimation();

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);
      setRegistrationSuccess(true);

      // Clear form fields on successful registration
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Registration error:', error);
      setError(`Failed to register: ${error.message}`);
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
        <h1 className="text-3xl mb-4 text-center text-black">Register</h1>
        <motion.input
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-4 px-4 py-2 border rounded w-full text-black"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <motion.input
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-4 px-4 py-2 border rounded w-full text-black"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <motion.input
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-4 px-4 py-2 border rounded w-full text-black"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <motion.input
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mb-4 px-4 py-2 border rounded w-full text-black"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          onClick={handleRegister}
        >
          Register
        </motion.button>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-red-500 mt-2"
          >
            {error}
          </motion.p>
        )}
        {registrationSuccess && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-green-500 mt-2"
          >
            Registration Successful!!
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Register;
