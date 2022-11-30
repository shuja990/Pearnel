import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import "./bootstrap.min.css";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Moaf from "./pages/MOAF/Moaf";
import Education from "./pages/Education/Education";
import Vision from './pages/SECVision&Plans/Vision'
import SmallBiz from './pages/SmallBiz/SmallBiz'
import AccessWater from './pages/AccessWater/AccessWater'
import Building from './pages/Building'
import Intern from './pages/Intern/Intern'
import Donate from './pages/Donate/Donate'
import Enumerate from './pages/Enumerate/Enumerate'

import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyD2rHiBMhN2h2kA7lnNW0X_OUgKebqYBc8",
  authDomain: "pool-3519b.firebaseapp.com",
  databaseURL: "https://pool-3519b-default-rtdb.firebaseio.com",
  projectId: "pool-3519b",
  storageBucket: "pool-3519b.appspot.com",
  messagingSenderId: "872457707354",
  appId: "1:872457707354:web:24113f2bb5bafad94a5d63",
  measurementId: "G-6YLWJMR0HT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route exact path="/*" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/moaf" element={<Moaf />} />
            <Route exact path="/visions-plans" element={<Vision />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/small-business" element={<SmallBiz />} />
            <Route exact path="/access-water" element={<AccessWater />} />
            <Route exact path="/building" element={<Building />} />
            <Route exact path="/donate" element={<Donate />} />
            <Route exact path="/intern" element={<Intern />} />
            <Route exact path="/enumerate" element={<Enumerate />} />
            <Route></Route>
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default App;
