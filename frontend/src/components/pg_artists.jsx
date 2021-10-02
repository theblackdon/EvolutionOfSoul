import React from "react";
//import SectionHeader from "./common/sectionHeader";
import Links from "./links";
import { getAllArtists } from "../services/fakeArtistsService";

const Artists = () => {
  const artists = getAllArtists();
  return (
    <>
      <Links sectionHeader="Artists" items={artists} />
    </>
  );
};

export default Artists;
