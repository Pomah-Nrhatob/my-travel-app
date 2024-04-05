import { BrowserRouter } from "react-router-dom";
import AppRouter from "./04-pages/AppRouter/AppRouter";
import Header from "./03-organisms/Header/components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
