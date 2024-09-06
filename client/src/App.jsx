import { lazy, useState } from "react";
import { lightTheme } from "./utils/Themes";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const Authentication = lazy(() => import("./pages/Authentication"));
const ShopListing = lazy(() => import("./pages/ShopListing"));
const Favourite = lazy(() => import("./pages/Favourite"));

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  flex-direction: column;
  transition: all 0.2s ease;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;

const App = () => {
  const [openAuth, setOpenAuth] = useState(false);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          <Navbar setOpenAuth={setOpenAuth} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/shop" exact element={<ShopListing />} />
            <Route path="/favourite" exact element={<Favourite />} />
          </Routes>
          {openAuth && (
            <Authentication openAuth={openAuth} setOpenAuth={setOpenAuth} />
          )}
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
