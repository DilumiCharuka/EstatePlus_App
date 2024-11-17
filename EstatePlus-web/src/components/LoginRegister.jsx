import React, { useState } from 'react';
import styled from 'styled-components';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <Container>
      <Form>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        {!isLogin && (
          <>
            <Label>Name</Label>
            <Input type="text" placeholder="Enter your name" required />
          </>
        )}
        <Label>Email</Label>
        <Input type="email" placeholder="Enter your email" required />
        <Label>Password</Label>
        <Input type="password" placeholder="Enter your password" required />
        <Button>{isLogin ? 'Login' : 'Register'}</Button>
        <ToggleLink onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Register here."
            : 'Already have an account? Login here.'}
        </ToggleLink>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #98fb98;
  background-image: url('/assets/hero-bg.jpeg');
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
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
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