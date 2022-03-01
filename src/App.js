import React from 'react';
import './App.css';
import { Navbar } from './components';
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from './container';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />

      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;

// import React from 'react';

// import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
// import { Navbar } from './components';
// import './App.css';

// const App = () => (
//   <div>
//     <Navbar />
//     <Header />
//     <AboutUs />
//     <SpecialMenu />
//     <Chef />
//     <Intro />
//     <Laurels />
//     <Gallery />
//     <FindUs />
//     <Footer />
//   </div>
// );

// export default App;
