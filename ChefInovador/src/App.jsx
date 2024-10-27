import React from 'react';
import LoginUser from './components/pages/LoginUser';
import NavBar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Home from './components/pages/Home';
import CreateRecipe from './components/pages/CreateRecipe';
import ListRecipe from './components/pages/ListRecipe';
import DetailRecipes from './components/pages/DetailRecipes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
      <>
        <BrowserRouter>
          <Container>
            <Routes>
              <Route path='/' element={<NavBar/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/CreateRecipe' element={<CreateRecipe/>}/>
                <Route path='/ListRecipe' element={<ListRecipe/>}/>
                <Route path="/DetailRecipe/:cod_receita" element={<DetailRecipes/>}/>
              </Route>
            </Routes>
          </Container>
        </BrowserRouter>
      </>
    );
};

export default App;
