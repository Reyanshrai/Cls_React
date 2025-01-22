import { useState } from "react";
import CancleRequest from "./blueBird";

const Setshow = ({varx}) => {
    (varx ? <CancleRequest/> : null)
}

const  ReqCancel = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? "Hide User" : "Show User"}</button>
      <CancleRequest/>
    </div>
  );
};

export default ReqCancel;