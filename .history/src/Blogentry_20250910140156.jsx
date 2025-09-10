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

export default BlogEntry;
