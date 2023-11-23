import { useState, createContext, useContext } from "react";
const UserContext = createContext();
export default function Hello() {
  const [user, setUser] = useState("John Best");

  return (
    <UserContext.Provider value={{user, setUser}}>
      <p>{`Hello ${user}!`}</p>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <p>Component 2</p>
      <Component3 />
    </>
  );
}

function Component3() {
  const {setUser} = useContext(UserContext);
  return (
    <>
      <p>Component 3</p>
      <input type="button" onClick={() => setUser("Olivia Jones")} value="Olivia"/>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <p>Component 4</p>
      <Component5 />
    </>
  );
}

function Component5() {
  const {user} = useContext(UserContext);
  return (
    <>
      <p>Component 5</p>
      <p>{`Hello ${user} again!`}</p>
    </>
  );
}