import React from 'react';

import { About ,Header ,Footer, Skills, Testimonials, Work} from './container';
import Navbar from './components/Navbar/Navbar';


import './index.css';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonials />
    <Footer />
   
  </div>
);

export default App;