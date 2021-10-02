import React from "react";

const SectionHeader = (props) => {
  return (
    <React.Fragment>
      <div className="section-header">
        {props.section}
        {/* <hr /> */}
      </div>
    </React.Fragment>
  );
};

export default SectionHeader;
