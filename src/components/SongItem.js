export const SongItem = (props) => {
  return (
    <div
      className={`song ${
        props.index % 2 === 0 ? "grey-background" : "light-grey-background"
      }`}
    >
      <img className="song-image" alt={`${props.title}`} src={props.imgSrc} />
      <div>
        <p className="song-name">{props.title}</p>
        <p className="movie-name"> {props.movie}</p>
        <p className="singer-name">
          {" "}
          by <span class="singer-text">{props.singer}</span>
        </p>
        <a target="blank" className="song-link" href={props.link}>
          Listen Now
        </a>
      </div>
    </div>
  );
};
