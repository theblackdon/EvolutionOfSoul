import React, { useState } from "react";
import { getPopularArtists } from "../services/fakeArtistsService";
import { getPopularAlbums } from "../services/fakeAlbumsService";
import SectionHeader from "./common/sectionHeader";
import Links from "./links";
import FeaturedArtist from "./featuredArtist";

const Home = () => {
  const [currentArtist] = useState("5b21ca3eeb7f6fbccd471811");
  const [popularArtists] = useState(getPopularArtists());
  const [popularAlbums] = useState(getPopularAlbums());

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-8">
          <SectionHeader section="Featured Artist" />
          {<FeaturedArtist id={currentArtist} />}
        </div>
        <div className="col-4">
          <Links sectionHeader="Most Popular Artists" items={popularArtists} />
          <Links sectionHeader="Most Popular Albums" items={popularAlbums} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
