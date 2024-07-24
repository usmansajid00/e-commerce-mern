import styled from "styled-components";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;
const TextButton = styled.div`
  width: 100%;
  text-align: end;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  font-weight: 500;
  &:hover{
  color: ${({ theme }) => theme.primary}
`;

const Signin = () => {
  return (
    <Container>
      <div>
        <Title>Welcome To Krist</Title>
        <Span>Please login with your details here !</Span>
      </div>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <TextInput
          label="Email Address"
          placeholder="Enter Your email Address"
        />
        <TextInput label="Password" placeholder="Enter Your password" />
        <TextButton>Forgot Password?</TextButton>
        <Button text="Sign In" />
      </div>
    </Container>
  );
};

export default Signin;
