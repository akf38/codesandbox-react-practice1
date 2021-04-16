import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentLadyStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentLadyStyle}>{children}</p>;
};
