import "./style/PortfolioCard.css"

const PortfolioCard = (props) => {
    return (
        <div className="cards"><div className="card" style={{width: "30rem"}}>
          <a href={props.link} target="_blank" rel="noreferrer">
            <img src={props.image} className="card-img-top" alt="" />
          </a>
          <div className="card-body">
          <h4 className="card-title"><strong>{props.title}</strong></h4>
          <h6 className="card-lang" >{props.languages}</h6>
          <h8 className="card-text">{props.description}</h8>
          </div>
        </div>
        </div>
    )
}

export default PortfolioCard