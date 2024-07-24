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

const Signup = () => {
  return (
    <Container>
      <div>
        <Title>Create New Account</Title>
        <Span>Please enter details to create a new account</Span>
      </div>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <TextInput label="Full Name" placeholder="Enter Your full name" />
        <TextInput
          label="Email Address"
          placeholder="Enter Your email Address"
        />
        <TextInput label="Password" placeholder="Enter Your password" />
        <Button text="Sign In" />
      </div>
    </Container>
  );
};

export default Signup;
