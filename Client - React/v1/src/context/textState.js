import TextContext from "./textContext";
import { useState } from "react";

const TextState = (props) => {
  const [state, setState] = useState({
    text: "REACT",
  });
  const timer = () => {
    setTimeout(() => {
      setState({
        text: "MERN STACK",
      });
    }, 2000);
  };
  return (
    <TextContext.Provider value={{ state: state, timer: timer }}>
      {props.children}
    </TextContext.Provider>
  );
};

export default TextState;
