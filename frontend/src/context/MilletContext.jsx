import React, { createContext, useState } from "react";

const MilletContext = createContext();

const MilletProvider = ({ children }) => {
  const [predictedMillet, setPredictedMillet] = useState({
    en:null,
    enHindi:null
  });

  return (
    <MilletContext.Provider value={{ predictedMillet, setPredictedMillet }}>
      {children}
    </MilletContext.Provider>
  );

};
export {MilletProvider,MilletContext };
