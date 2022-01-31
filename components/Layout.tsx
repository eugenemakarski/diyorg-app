import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>
        <main></main>
      </div>
    </>
  );
};

export default Layout;
