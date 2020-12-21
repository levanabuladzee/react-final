import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import React, { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Movies from './components/movies/Movies';
import MovieDetails from './components/movies/details/MovieDetails';
import About from './components/about/About';
import { Contact } from './components/contact/Contact';
import Footer from './components/footer/Footer';

export const ErrorPage = () => {
  return (
    <Fragment>
      <div className="main">
        <h1>404</h1>
        <p>Not Found</p>
        <Link to="/home"><button>Go Home</button></Link>
      </div>
      <Footer />
    </Fragment>
  )
}

function App() {
  return (
    <div className="myApp">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:movieId" exact component={MovieDetails} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route component={ErrorPage}/>
      </Switch>
    </div>
  );
}

export default App;
