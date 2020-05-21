//here will use "useref" hook in functional component

import React, { useref, useEffect } from "react";
//initial value of ref is assignned as null
const Ref = () => {
  const myheading = useref(null);
  const input = useref(null);
  return (
    <React.Fragment>
      <h3 ref={myheading}>This is ref Title</h3>
      <input type="text" ref={input} />
    </React.Fragment>
  );
};

//will try to get heading and input through "useref" in functional component
export default Ref;
