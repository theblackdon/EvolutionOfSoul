import React from "react";
import ArtistImage from "./artistImage";
import ArtistDetails from "./artistDetails";
import ArtistAlbums from "./artistAlbums";
import { getArtist } from "../services/fakeArtistsService";

const urlPrefix = "../images/artists/";

const FeaturedArtist = ({ id }) => {
  console.log(id);
  const artist = getArtist(id);

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-3">
          <ArtistImage imageUrl={urlPrefix + artist.imageUrl} />
        </div>
        <div className="col-5 m-2">
          <ArtistDetails artist={artist} />
        </div>
        <div className="col-3">
          <ArtistAlbums albums={artist.albums} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedArtist;
