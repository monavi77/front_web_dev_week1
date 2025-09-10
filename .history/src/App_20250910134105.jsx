function App() {
  return (
    <div className="App">
      <h1>My Blog </h1>
      <BlogEntry />
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
