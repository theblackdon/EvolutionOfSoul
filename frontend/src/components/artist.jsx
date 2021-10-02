import React from "react";
import ArtistImage from "./artistImage";
import ArtistDetails from "./artistDetails";
import ArtistAlbums from "./artistAlbums";
import { getArtist } from "../services/fakeArtistsService";
import SectionHeader from "./common/sectionHeader";

const urlPrefix = "../images/artists/";

const Artist = (props) => {
  const artist = getArtist(props.match.params.id);
  console.log(artist);

  return (
    <React.Fragment>
      <SectionHeader section="Artist" />
      <div className="row">
        <div className="col-2">
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

export default Artist;
