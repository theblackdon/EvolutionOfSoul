import React from "react";
import ListGroup from "./common/listGroup";
import SectionHeader from "./common/sectionHeader";

const Links = (props) => {
  return (
    <React.Fragment>
      <SectionHeader section={props.sectionHeader} />
      <ListGroup items={props.items} />
    </React.Fragment>
  );
};

export default Links;
<h1>Links</h1>;
