import './App.css';
import React from 'react';

import Header from './Components/Header/Header';
import Portfolio from './Pages/Portfolio/Portfolio';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Resume from './Pages/Resume/Resume';
import { Grid, Container } from '@material-ui/core';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </>

    )
  );
  return (
    <>
      <Container className='top-60'>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item className='container_page'>
            <Header />
            <RouterProvider router={router} />
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
