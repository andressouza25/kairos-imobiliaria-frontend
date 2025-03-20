import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Header from "./components/Header";
import AppRoutes from "./routes";
import Footer from "./components/Footer";
import "./styles/global.css";
import { Content, PageContainer } from "./components/styles/AppStyles";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
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
  );
}

export default App;
