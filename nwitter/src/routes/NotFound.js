import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.location.href = "/";
  }, []);
  return (
    <>
      <div>NotFound</div>
    </>
  );
};

export default NotFound;
