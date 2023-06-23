import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Menu from "./components/menu/menu";
import "./App.css";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Timetable from "./pages/timetable/timetable";
import TimetableUB from "./pages/timetable/timetableUB";
import Download from "./pages/download/download";
import TimetableTab from "./pages/timetable/timetableTab";
import "bootstrap/dist/css/bootstrap.css";
import News from "./pages/news/news";
import Text from "./pages/text/text";

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Banner />
        <Menu />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/lich-truc" exact element={<TimetableTab />} />
            <Route path="/lich-lam-viec-ubnd" exact element={<TimetableUB />} />
            <Route path="/tai-mau-don" exact element={<Download />} />
            <Route path="/tin-tuc-noi-bo" exact element={<News />} />
            <Route path="/van-ban" exact element={<Text />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
