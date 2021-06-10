import React from "react"


const Playlist = (props) => {
  const { playlist, songs, deleteSong } = props

  const loading = () => {
    return <h2>Playlist1</h2>
  }
  const loaded = () => {
    return (
      <div className="container">
        <h1>Playlist</h1>
        <h2>{playlist}</h2>
        <div className="playlist">
          {songs.map((song, index) => (
            <div className="song" key={index}>
              <div className="song-details">
                <p>{song.title}</p>
                <p>{song.artist}</p>
                <p>{song.duration}</p>
                <p className="delete-button" onClick={() => deleteSong(song)}>X</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return songs ? loaded() : loading()
}

export default Playlist