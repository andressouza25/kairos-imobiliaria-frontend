import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes";
import WhatsAppButton from "./components/WhatsAppButton";
import { Content, PageContainer } from "./components/styles/AppStyles";
import { AuthProvider } from "./contexts/AuthContext";
import { theme } from "./styles/theme";

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
