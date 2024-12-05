import "./App.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title">This is a Headline 2</h2>
      <label htmlFor="input-text">
        <input type="text" name="input" id="input-text" />
      </label>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Offenbarung"
      >
        Read this to get prepared!
      </a>
    </article>
  );
}
