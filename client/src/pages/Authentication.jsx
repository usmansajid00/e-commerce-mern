import { useState } from "react";

import styled from "styled-components";
import { Modal } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

import Signin from "../components/Signin";
import Signup from "../components/Signup";
import LogoImg from "../utils/Images/Logo.png";
import AuthImg from "../utils/Images/AuthImage.png";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
`;
const Left = styled.div`
  flex: 1;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Logo = styled.img`
  position: absolute;
  top: 40px;
  left: 60px;
  z-index: 10;
`;
const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Right = styled.div`
  flex: 0.9;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;
const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  padding: 2px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  display: flex;
  gap: 12px;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
const TextButton = styled.div`
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.primary};
`;

const Authentication = ({ openAuth, setOpenAuth }) => {
  const [login, setLogin] = useState(true);

  return (
    <Modal open={openAuth} onClose={() => setOpenAuth(false)}>
      <Container>
        <Left>
          <Logo src={LogoImg} />
          <Image src={AuthImg} />
        </Left>
        <Right>
          <CloseButton onClick={() => setOpenAuth(false)}>
            <CloseOutlined />
          </CloseButton>
          {login ? (
            <>
              <Signin />
              <Text>
                Don&apos;t have an account ?
                <TextButton onClick={() => setLogin(false)}>Sign Up</TextButton>
              </Text>
            </>
          ) : (
            <>
              <Signup />
              <Text>
                Already have an account ?
                <TextButton onClick={() => setLogin(true)}>Sign In</TextButton>
              </Text>
            </>
          )}
        </Right>
      </Container>
    </Modal>
  );
};

export default Authentication;
