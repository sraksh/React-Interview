import React, { useState } from "react";

export const ChildComponent = () => {
  console.log("Child gets rendered");

  return (
    <>
      <div>Children component</div>
    </>
  );
};

export const MyChildComponent = React.memo(ChildComponent);
