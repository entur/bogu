import React from 'react';

const UdugLink = ({ id, referential, children }) => {
  const baseURL = `${window.config.udugBaseUrl}report/`;


  const URL = `${baseURL}${referential}/${id}`;

  return (
    <a title={URL} target="_blank" href={URL}>
      {children}
    </a>
  );
};

export default UdugLink;
