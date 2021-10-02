import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Banner from "./components/common/banner";
import Nav from "./components/common/nav";
import Artists from "./components/pg_artists";
import Artist from "./components/artist";
import Home from "./components/pg_home";
import Genres from "./components/pg_genres";
import Albums from "./components/pg_albums";
import Labels from "./components/pg_labels";
import AlbumDetails from "./components/albumDetails";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PreviouslyFeaturedArtists from "./components/previouslyFeaturedArtists";
import { getPreviouslyFeaturedArtists } from "./services/fakeArtistsService";

const App = () => {
  const [previouslyFeaturedArtists] = useState(getPreviouslyFeaturedArtists());
  return (
    <BrowserRouter>
      <main className="container">
        <div className="row">
          <div className="col-12">
            <Banner imageSource="images/EvolutionOfSoul2.png" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Nav />
          </div>
        </div>
        <div className="content">
          <Switch>
            <Route path="/artist/:id" component={Artist} />
            <Route path="/artists" component={Artists} />
            <Route path="/genres" component={Genres} />
            <Route path="/album/:id" component={AlbumDetails} />
            <Route path="/albums" component={Albums} />
            <Route path="/labels" component={Labels} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
        <div className="row">
          <div className="col-12">
            <PreviouslyFeaturedArtists artists={previouslyFeaturedArtists} />
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
