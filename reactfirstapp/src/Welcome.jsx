function Welcome() {
  const username = localStorage.getItem("username");

  return (
    <div>
      <h1>Welcome in MyUniverse</h1>
      <h2>{username}</h2>
    </div>
  );
}

export default Welcome;