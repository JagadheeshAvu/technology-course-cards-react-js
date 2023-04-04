import './index.css'

const TechnologyCards = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className, key} = cardDetails
  console.log(key)
  return (
    <li className={className}>
      <h1 className="role-name">{title}</h1>
      <p className="description">{description}</p>
      <div className="img">
        <img src={imgUrl} className="img-sizing" alt={title} />
      </div>
    </li>
  )
}

export default TechnologyCards
