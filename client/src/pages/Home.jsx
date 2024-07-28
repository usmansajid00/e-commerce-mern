import styled from "styled-components";
import HeaderImg from "../utils/Images/Header.png";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
`;
const Section = styled.div``;
const Img = styled.img``;

const Home = () => {
  return (
    <Container>
      <Section style={{ alignItems: "center" }}>
        <Img src={HeaderImg} />
      </Section>
    </Container>
  );
};

export default Home;
