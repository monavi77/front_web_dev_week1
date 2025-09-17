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
      <h2>Hello world!</h2>
      <p>My name is Vika Monakova</p>
      <p>I am learning React!</p>
      <button>Read more</button>
    </div>
  );
}

function BlogEntry(props) {
  const buttonText = "Read me";
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.summary}</p>
      <button>Read more</button>
      <button>{buttonText}</button>
    </div>
  );
}

export default App;
