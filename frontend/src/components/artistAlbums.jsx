import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "./common/sectionHeader";

const ArtistAlbums = (props) => {
  const urlPrefix = "../images/albums/";
  return (
    <React.Fragment>
      <SectionHeader section=" Albums" />
      {props.albums.map((album) => (
        <Link key={album._id} to={`/album/${album._id}`}>
          <img
            src={urlPrefix + album.imageUrl}
            className="album-image-small"
            alt={album.title}
          />
        </Link>
      ))}
    </React.Fragment>
  );
};

export default ArtistAlbums;
