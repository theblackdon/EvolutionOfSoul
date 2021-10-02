import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "./common/sectionHeader";

const PreviouslyFeaturedArtists = (props) => {
  const urlPrefix = "images/artists/";
  return (
    <React.Fragment>
      <SectionHeader section=" Previously Featured Artists" />
      {props.artists.map((artist) => (
        <Link key={artist._id} to={`/artist/${artist._id}`}>
          <img
            src={urlPrefix + artist.imageUrl}
            className="album-image-medium"
            alt={artist.name}
          />
        </Link>
      ))}
    </React.Fragment>
  );
};

export default PreviouslyFeaturedArtists;
