import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import docPng from "../../assets/img/doc.png"

const DocumentItem = () => {
  return (
    <Link to={ROUTES.DOCUMENT_FORM_PAGE.replace(":id", 1)} className="document">
      <div className="document-img-box">
        <div className="document-img-black"></div>
        <img src={docPng} alt="document" className="document__img" />
      </div>
      <div className="document-info">
        <h5 className="document-title">Типовой Договор</h5>
        <p className="document-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          unde porro voluptates praesentium ad nam?
        </p>
      </div>
    </Link>
  );
};

export default DocumentItem;
