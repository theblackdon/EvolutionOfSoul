import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "./common/sectionHeader";
import { getAlbum } from "../services/fakeAlbumsService";

const AlbumDetails = (props) => {
  const album = getAlbum(props.match.params.id);
  const urlPrefix = "../images/albums/";

  return (
    <>
      <SectionHeader section="Album" />
      <div className="row">
        <div className="col-2">
          <img
            src={urlPrefix + album.imageUrl}
            className={"artist-image"}
            alt=""
          />
        </div>
        <div className="col-7 m-2">
          <div className="display-4">{album.title}</div>
          <div className="lead">
            <Link to={`/artist/${album.artistId}`}>{album.name}</Link>
            {" - " + album.year + " - " + album.songs.length + " songs"}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <SectionHeader section="Songs" />
          <table className="table">
            <thead>
              <tr>
                <th>Length</th>
                <th>#</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {album.songs.map((song) => (
                <tr key={song.number}>
                  <td>{song.number}</td>
                  <td>{song.title}</td>
                  <td>{song.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AlbumDetails;
