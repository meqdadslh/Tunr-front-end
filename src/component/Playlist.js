import React from "react"

const Playlist = (props) => {
    const {songs} = props
    
    const loaded = () => (
        <div>
          {songs.map((song) => (
            <div className="song" key={song._id}>
            <h4>{song.title}</h4>
            <h4>{song.artist}</h4>
            <h5>{song.duration}</h5>
            </div>
          ))}
        </div>
      )
    
      const loading = () => <h1>Loading</h1>
      
      return (
        <h1>Totally Awesome Playlist!</h1>, 
        songs.length > 0 ? loaded() : loading ()

      )
}

export default Playlist