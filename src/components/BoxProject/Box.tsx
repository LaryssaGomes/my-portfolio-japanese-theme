import React from "react";
import "./styles.scss";

export const Box = ({ children }: any) => {
  return <div className="double-border">{children}</div>;
};
