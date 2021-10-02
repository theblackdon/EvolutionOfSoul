import React from "react";

const ArtistDetails = (props) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-3">
          <div className="artist-label">Name</div>
        </div>
        <div className="col-9">{props.artist.name}</div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="artist-label">Genre</div>
        </div>
        <div className="col-9">
          {props.artist.genres.map((genre) => genre.genre + " ")}
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="artist-label">Bio</div>
        </div>
        <div className="col-9">{props.artist.bio}</div>
      </div>
    </React.Fragment>
  );
};

export default ArtistDetails;
