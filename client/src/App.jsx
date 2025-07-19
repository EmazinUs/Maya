import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import ShopListing from "./pages/ShopListing";
import Favourite from "./pages/Favourite";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import ToastMessage from "./components/ToastMessage";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const { currentUser, open, message, severity } = useSelector((state) => state.user);
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          <Navbar setOpenAuth={setOpenAuth} currentUser={currentUser} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopListing />} />
            <Route path="/favorite" element={<Favourite />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop/:id" element={<ProductDetails />} />
          </Routes>

          {openAuth && (
            <Authentication openAuth={openAuth} setOpenAuth={setOpenAuth} />
          )}

          {open && (
            <ToastMessage open={open} message={message} severity={severity} />
          )}
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
