import React, { useState, createContext, useContext } from "react";
const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </UserContext.Provider>
    </>
  );
}

const Component2 = () => {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
};

const Component3 = ({ user }) => {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
};

const Component4 = ({ user }) => {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
};

const Component5 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
};
