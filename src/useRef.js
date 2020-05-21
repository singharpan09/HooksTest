//here will use "useref" hook in functional component

import React, { useRef, useEffect } from "react";
//initial value of ref is assignned as null
const Ref = () => {
  const myheading = useRef(null);
  const input = useRef(null);

  useEffect(() => {
    console.log(myheading.current);
    console.log(input.current);
  }, []);
  //this gives access to input tag and heading tag
  //have to extact value from it
  return (
    <React.Fragment>
      <h3 ref={myheading}>This is ref Title</h3>
      <input type="text" ref={input} />
    </React.Fragment>
  );
};

//will try to get heading and input through "useref" in functional component
export default Ref;
