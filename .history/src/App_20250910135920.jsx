import BlogEntry from "./BlogEntry.jsx";

function App() {
  return (
    <div>
      <h1>My Blog </h1>
      <BlogEntry title="Web Development Made Easy" summary="Hello world!" />
      <BlogEntry title="Cool cool cool" summary="I am learning React!" />
      <BlogEntry
        title="Who said you cannot code"
        summary="My name is Vika Monakova"
      />
    </div>
  );
}

export default App;
