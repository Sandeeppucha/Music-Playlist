import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const PlayList = props => {
  const {trackDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onClickDelete = () => {
    onClickDeleteTrack(id)
  }

  return (
    <li className="list-style">
      <div className="track-container">
        <div className="left-container">
          <img src={imageUrl} alt="track" className="thumbnail" />
          <div className="song-container">
            <p className="song-name">{name}</p>
            <p className="genre-name">{genre}</p>
          </div>
        </div>

        <div className="duration-container">
          <p className="duration">{duration}</p>
          <button
            type="button"
            className="delete-button"
            onClick={onClickDelete}
            data-testid="delete"
          >
            <AiOutlineDelete className="delete-icon" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default PlayList
