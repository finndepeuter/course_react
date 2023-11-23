import { useState } from "react";

export default function Hello() {
  const [user, setUser] = useState("John Best");

  return (
    <>
      <p>{`Hello ${user}!`}</p>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <p>Component 2</p>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <p>Component 3</p>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <p>Component 4</p>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <p>Component 5</p>
      <p>{`Hello ${user} again!`}</p>
    </>
  );
}