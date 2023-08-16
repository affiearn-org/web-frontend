// import logo from './logo.svg';
import { Suspense , lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navbar, Features, LoadingScreen } from "./components";
import { SignIn , SignUp, About, Contact, Guide, Faq } from "./pages";
import TProvider from "./themes";
import { StyledBg } from "./styleComponents";
import "./App.css";

// const Loadable = (Component) => (props) =>{
//   return(
//      <Suspense fallback={<LoadingScreen />} >
//         <Component {...props}/>
//      </Suspense>
//   )
// }

// const Home = Loadable(lazy(() => import("./components/features/features")));

function App() {
  return (
    <BrowserRouter>
      <TProvider>
        <div className="App">
          <StyledBg>
            <Navbar />
          </StyledBg>
          <Routes>
              <Route exact path="/" element={<Features />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={ <SignIn /> } />
              <Route path="/signup" element={ <SignUp /> } />
          </Routes>
        </div>
      </TProvider>
    </BrowserRouter>
  );
}

export default App;
