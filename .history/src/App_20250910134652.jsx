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

function BlogEntry() {
  return (
    <div>
      <h1>Hello world!</h1>
      <p>My name is Vika Monakova</p>
      <p>I am learning React!</p>
      <button>Read more</button>
    </div>
  );
}

export default App;
