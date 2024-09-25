import React from "react";

const FilePreview = ({ fileType }) => {
  const file = `/assets/sample.${fileType}`;

  return (
    <div>
      {fileType === "pdf" && (
        <embed src={file} width="600" height="400" type="application/pdf" />
      )}
      {fileType === "docx" && <iframe src={file} title="docx preview" />}
    </div>
  );
};

export default FilePreview;
