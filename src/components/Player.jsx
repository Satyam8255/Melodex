export const Player = ({ fn, song }) => {
  return (
    <body className="bg-dark text-white">
    <div  >
      <button
        onClick={() => {
          fn(false, null);
        }}
        className="btn btn-success"
      >
        🏠 Back to Home
      </button>
      <br />
      <br />

      <div className="col-4">
        <img src={song.artworkUrl100} alt="" />
      </div>
      <br />

      <p>
        Singer Name : {song.artistName} Track Name : {song.trackName}
      </p>
      <br />

      <audio controls>
        <source src={song?.previewUrl} type="audio/mp4" />
        Your browser does not support the audion format
      </audio>
    </div>
    </body>
  );
};
