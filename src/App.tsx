import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes";
import Footer from "./components/Footer";
import "./styles/global.css";
import { Content, PageContainer } from "./components/styles/AppStyles";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
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
  );
}

export default App;
