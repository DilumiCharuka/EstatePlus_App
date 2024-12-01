import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth, db } from '../firebase'; // Adjust the import path as needed

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true); // State for toggling Login/Register
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // React Router navigation hook

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission

    try {
      // Firebase Login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert('Login successful!');
      navigate('/customer-dashboard'); // Redirect to Customer Dashboard
    } catch (error) {
      console.error('Login Error:', error.message);
      alert('Login failed. Please try again.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent form submission

    if (!name) {
      alert('Name is required for registration.');
      return;
    }

    try {
      // Firebase Register
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user details in Firestore
      await setDoc(doc(db, 'customers', user.uid), {
        uid: user.uid,
        name,
        email,
        createdAt: serverTimestamp(), // Add a timestamp
      });

      alert('Registration successful! Please login.');
      setIsLogin(true); // Switch to Login form
    } catch (error) {
      console.error('Registration Error:', error.message);
      alert('Registration failed. Please try again.');
    }
  };

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <Container>
      <Form onSubmit={isLogin ? handleLogin : handleRegister}>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>

        {/* Show Name field only in Register form */}
        {!isLogin && (
          <>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </>
        )}

        {/* Email Field */}
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password Field */}
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Button */}
        <Button>{isLogin ? 'Login' : 'Register'}</Button>

        {/* Toggle Form Link */}
        <ToggleLink onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Register here."
            : 'Already have an account? Login here.'}
        </ToggleLink>
      </Form>
    </Container>
  );
};


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import styled from 'styled-components';

// const LoginRegister = () => {
//   const [isLogin, setIsLogin] = useState(true); // State for toggling Login/Register
//   const navigate = useNavigate(); // React Router navigation hook

//   const handleLogin = (e) => {
//     e.preventDefault(); // Prevent form submission

//     // Example Login Logic (you can replace it with actual authentication)
//     const isAuthenticated = true; // Replace with your logic
//     if (isAuthenticated) {
//       navigate('/customer-dashboard'); // Redirect to Customer Dashboard
//     } else {
//       alert('Invalid login. Please try again.');
//     }
//   };

//   const toggleForm = () => {
//     setIsLogin((prev) => !prev);
//   }; 

//   return (
//     <Container>
//       <Form onSubmit={handleLogin}>
//         <h2>{isLogin ? 'Login' : 'Register'}</h2>

//         {/* Show Name field only in Register form */}
//         {!isLogin && (
//           <>
//             <Label htmlFor="name">Name</Label>
//             <Input
//               id="name"
//               type="text"
//               placeholder="Enter your name"
//               required
//             />
//           </>
//         )}

//         {/* Email Field */}
//         <Label htmlFor="email">Email</Label>
//         <Input
//           id="email"
//           type="email"
//           placeholder="Enter your email"
//           required
//         />

//         {/* Password Field */}
//         <Label htmlFor="password">Password</Label>
//         <Input
//           id="password"
//           type="password"
//           placeholder="Enter your password"
//           required
//         />

//         {/* Button */}
//         <Button>{isLogin ? 'Login' : 'Register'}</Button>

//         {/* Toggle Form Link */}
//         <ToggleLink onClick={toggleForm}>
//           {isLogin
//             ? "Don't have an account? Register here."
//             : 'Already have an account? Login here.'}
//         </ToggleLink>
//       </Form>
//     </Container>
//   );
// };

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #98fb98;
  background-image: url('/assets/hero-bg.jpeg');
  background-size: cover;
  background-position: center;
`;

const Form = styled.form`
  background: #e9ffdb;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  text-align: left;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  color: #333;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ToggleLink = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default LoginRegister;
