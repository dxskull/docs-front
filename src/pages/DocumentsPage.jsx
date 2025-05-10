import React from "react";
import DocumentsList from "../components/Documents/DocumentsList";

const DocumentsPage = () => {
  return (
    <div className="container">
      <h1 className="title">Документы</h1>
      <DocumentsList />
    </div>
  );
};

export default DocumentsPage;
