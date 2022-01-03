import React from "react";
import PageElement from "./PageElement";

const Pageplan = ({ data: { pageElements } }) =>
  pageElements.map(r => <PageElement key={r.id} {...r} />);

export default Pageplan;
