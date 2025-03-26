import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Header from "./components/Header";
import AppRoutes from "./routes";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { Content, PageContainer } from "./components/styles/AppStyles";
import { AuthProvider } from "./contexts/AuthContext"; // Importando o AuthProvider

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <PageContainer>
            <Header />
            <Content>
              <AppRoutes />
            </Content>
            <Footer />
            <WhatsAppButton />
          </PageContainer>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
