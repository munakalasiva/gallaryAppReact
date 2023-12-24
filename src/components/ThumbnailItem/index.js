import './index.css'

const ThumbnailItem = props => {
  const {eachObject, isActive, updateActiveTabId} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachObject

  const thumbnailClassName = isActive ? `thumbnail active` : 'thumbnail'

  const onClickThumbnailImage = () => {
    updateActiveTabId(id)
  }

  return (
    <li className="list-item">
      <button type="button" onClick={onClickThumbnailImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
