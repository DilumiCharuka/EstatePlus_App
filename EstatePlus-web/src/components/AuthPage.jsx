
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { db } from "../firebase"; // Ensure Firestore is initialized in `firebase.js`

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const selectedRole = queryParams.get("role");
    if (selectedRole) {
      setRole(selectedRole);
    }
  }, [location.search]);

  const handleSubmit = async () => {
    if (!role) {
      alert("Please select a role to proceed!");
      return;
    }

    try {
      if (isLogin) {
        // Login logic: Fetch user data from Firestore and verify email/password manually
        const collection = role === "propertyOwner" ? "propertyOwners" : "serviceProviders";
        const userDoc = await getDoc(doc(db, collection, email)); // Use email as document ID

        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.password === password) {
            alert("Login successful!");
            if (role === "propertyOwner") {
              navigate("/property-owner-dashboard");
            } else if (role === "serviceProvider") {
              navigate("/service-provider-dashboard");
            }
          } else {
            alert("Invalid password!");
          }
        } else {
          alert("User not found!");
        }
      } else {
        // Registration logic: Save user data in Firestore
        if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
        if (!name || !contactNumber) {
          alert("Please fill in all the required fields!");
          return;
        }

        const collection = role === "propertyOwner" ? "propertyOwners" : "serviceProviders";

        await setDoc(doc(db, collection, email), {
          name,
          contactNumber,
          role,
          email,
          password, // Store password directly (not recommended for production)
        });

        alert("Registration successful! Redirecting...");
        navigate("/"); // Redirect to home or relevant page
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <AuthWrapper>
      <AuthCard>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <RoleSelector>
          <p>Select Role:</p>
          <label>
            <input
              type="radio"
              name="role"
              value="propertyOwner"
              checked={role === "propertyOwner"}
              onChange={(e) => setRole(e.target.value)}
            />
            Property Owner
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="serviceProvider"
              checked={role === "serviceProvider"}
              onChange={(e) => setRole(e.target.value)}
            />
            Service Provider
          </label>
        </RoleSelector>
        <Form>
          {!isLogin && (
            <>
              <label>
                Name:
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label>
                Contact Number:
                <input
                  type="tel"
                  placeholder="Enter your contact number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />
              </label>
            </>
          )}
          <label>
            Email:
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {!isLogin && (
            <label>
              Confirm Password:
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
          )}
        </Form>
        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>
        <ToggleLink onClick={() => setIsLogin((prev) => !prev)}>
          {isLogin
            ? "Don't have an account? Register here!"
            : "Already have an account? Login here!"}
        </ToggleLink>
      </AuthCard>
    </AuthWrapper>
  );
};

// Styled Components remain unchanged
// ...




const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #74ebd5, #acb6e5);
`;

const AuthCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    color: #2c3e50;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    font-size: 1rem;

    &:hover {
      background-color: #1a242f;
    }
  }
`;

const RoleSelector = styled.div`
  margin: 20px 0;

  p {
    font-weight: bold;
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin: 5px 0;
    cursor: pointer;

    input {
      margin-right: 10px;
    }
  }
`;

const Form = styled.div`
  margin: 20px 0;

  label {
    display: block;
    margin-bottom: 15px;
    text-align: left;

    input {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
`;

const ToggleLink = styled.p`
  margin-top: 15px;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #0056b3;
  }
`;

export default AuthPage;

// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth, db } from '../firebase'; // Import Firebase auth and Firestore

// const AuthPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [name, setName] = useState('');
//   const [contactNumber, setContactNumber] = useState('');
//   const [role, setRole] = useState(''); // To track the selected role

//   const handleSubmit = async () => {
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     if (!role) {
//       alert('Please select a role!');
//       return;
//     }

//     try {
//       // Registering the user with email and password
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user; // This contains the newly created user's info

//       // Conditional logic for selecting the correct collection
//       const userDocRef = doc(db, role === 'propertyOwner' ? 'propertyOwners' : 'serviceProviders', user.uid);
      
//       // Save the user data in the correct collection
//       await setDoc(userDocRef, {
//         name: name,
//         email: email,
//         contactNumber: contactNumber,
//         role: role, // Store the role as well
//       });

//       alert('Registration successful! Redirecting...');
//       navigate('/'); // Redirect to home or another page after successful registration
//     } catch (error) {
//       console.error(error);
//       alert(error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <input 
//           type="text" 
//           placeholder="Name" 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//         />
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//         />
//         <input 
//           type="password" 
//           placeholder="Confirm Password" 
//           value={confirmPassword} 
//           onChange={(e) => setConfirmPassword(e.target.value)} 
//         />
//         <input 
//           type="tel" 
//           placeholder="Contact Number" 
//           value={contactNumber} 
//           onChange={(e) => setContactNumber(e.target.value)} 
//         />
        
//         <div>
//           <label>
//             <input 
//               type="radio" 
//               value="propertyOwner" 
//               checked={role === 'propertyOwner'} 
//               onChange={(e) => setRole(e.target.value)} 
//             />
//             Property Owner
//           </label>
//           <label>
//             <input 
//               type="radio" 
//               value="serviceProvider" 
//               checked={role === 'serviceProvider'} 
//               onChange={(e) => setRole(e.target.value)} 
//             />
//             Service Provider
//           </label>
//         </div>

//         <button onClick={handleSubmit}>Register</button>
//       </form>
//     </div>
//   );
// };


// const AuthWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: linear-gradient(135deg, #74ebd5, #acb6e5);
// `;

// const AuthCard = styled.div`
//   background: white;
//   padding: 30px;
//   border-radius: 10px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   width: 400px;
//   text-align: center;

//   h2 {
//     margin-bottom: 20px;
//     color: #2c3e50;
//   }

//   button {
//     margin-top: 20px;
//     padding: 10px 20px;
//     background-color: #2c3e50;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     width: 100%;
//     font-size: 1rem;

//     &:hover {
//       background-color: #1a242f;
//     }
//   }
// `;

// const RoleSelector = styled.div`
//   margin: 20px 0;

//   p {
//     font-weight: bold;
//     margin-bottom: 10px;
//   }

//   label {
//     display: block;
//     margin: 5px 0;
//     cursor: pointer;

//     input {
//       margin-right: 10px;
//     }
//   }
// `;

// const Form = styled.div`
//   margin: 20px 0;

//   label {
//     display: block;
//     margin-bottom: 15px;
//     text-align: left;

//     input {
//       width: 100%;
//       padding: 10px;
//       margin-top: 5px;
//       border: 1px solid #ccc;
//       border-radius: 5px;
//     }
//   }
// `;

// const ToggleLink = styled.p`
//   margin-top: 15px;
//   color: #007bff;
//   cursor: pointer;
//   text-decoration: underline;

//   &:hover {
//     color: #0056b3;
//   }
// `;

// export default AuthPage;



// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { auth, db } from "../firebase"; // Adjust the import path as needed

// const AuthPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [role, setRole] = useState("");
//   const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [name, setName] = useState("");
//   const [contactNumber, setContactNumber] = useState("");

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const selectedRole = queryParams.get("role");
//     if (selectedRole) {
//       setRole(selectedRole);
//     }
//   }, [location.search]);

//   // Updated handleSubmit function
//   const handleSubmit = async () => {
//     if (!role) {
//       alert("Please select a role to proceed!");
//       return;
//     }

//     try {
//       if (isLogin) {
//         // Login logic
//         await signInWithEmailAndPassword(auth, email, password);
//         if (role === "propertyOwner") {
//           navigate("/property-owner-dashboard");
//         } else if (role === "serviceProvider") {
//           navigate("/service-provider-dashboard");
//         }
//       } else {
//         // Registration logic
//         if (password !== confirmPassword) {
//           alert("Passwords do not match!");
//           return;
//         }
//         if (!name || !contactNumber) {
//           alert("Please fill in all the required fields!");
//           return;
//         }

//         // Create user with email and password
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;

//         // Save additional user details in Firestore based on role
//         const collection = role === "propertyOwner" ? "propertyOwners" : "serviceProviders";

//         await setDoc(doc(db, collection, user.uid), {
//           name,
//           contactNumber,
//           role,
//           email,
//         });

//         alert("Registration successful! Redirecting...");
//         navigate("/"); // Redirect to home or relevant page
//       }
//     } catch (error) {
//       console.error(error);
//       alert(error.message);
//     }
//   };

//   return (
//     <AuthWrapper>
//       <AuthCard>
//         <h2>{isLogin ? "Login" : "Register"}</h2>
//         <RoleSelector>
//           <p>Select Role:</p>
//           <label>
//             <input
//               type="radio"
//               name="role"
//               value="propertyOwner"
//               checked={role === "propertyOwner"}
//               onChange={(e) => setRole(e.target.value)}
//             />
//             Property Owner
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="role"
//               value="serviceProvider"
//               checked={role === "serviceProvider"}
//               onChange={(e) => setRole(e.target.value)}
//             />
//             Service Provider
//           </label>
//         </RoleSelector>
//         <Form>
//           {!isLogin && (
//             <>
//               <label>
//                 Name:
//                 <input
//                   type="text"
//                   placeholder="Enter your full name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </label>
//               <label>
//                 Contact Number:
//                 <input
//                   type="tel"
//                   placeholder="Enter your contact number"
//                   value={contactNumber}
//                   onChange={(e) => setContactNumber(e.target.value)}
//                   required
//                 />
//               </label>
//             </>
//           )}
//           <label>
//             Email:
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </label>
//           {!isLogin && (
//             <label>
//               Confirm Password:
//               <input
//                 type="password"
//                 placeholder="Confirm your password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </label>
//           )}
//         </Form>
//         <button onClick={handleSubmit}>
//           {isLogin ? "Login" : "Register"}
//         </button>
//         <ToggleLink onClick={() => setIsLogin((prev) => !prev)}>
//           {isLogin
//             ? "Don't have an account? Register here!"
//             : "Already have an account? Login here!"}
//         </ToggleLink>
//       </AuthCard>
//     </AuthWrapper>
//   );
// };