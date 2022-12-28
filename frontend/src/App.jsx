import './App.css';
import React from 'react';

import Header from './Components/Header/Header';
import Portfolio from './Pages/Portfolio/Portfolio';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/Footer';
import Resume from './Pages/Resume/Resume';
// import NavBar from './Components/NavBar';
import { Grid, Container } from '@material-ui/core';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Router
} from "react-router-dom"; function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Resume />}>
        <Route path="portfolio" element={<Profile />} />
      </Route>


    )
  );
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3} style={{ background: '' }} >
            <Profile />
          </Grid>
          <Grid item xs style={{ background: "red" }} >
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
