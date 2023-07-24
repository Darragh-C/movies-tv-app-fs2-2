import React, { useState } from "react";

export const MediaContext = React.createContext(null);

const MediaContextProvider = (props) => {

  const [linkBasePath, setLinkBasePath] = useState("");

  const addBasePath = (linkBasePath) => {
    setLinkBasePath(linkBasePath);
  }

  return (
    <MediaContext.Provider
      value={{
        linkBasePath,
        addBasePath,
      }}
    >
      {props.children}
    </MediaContext.Provider>
  );
};

export default MediaContextProvider;
