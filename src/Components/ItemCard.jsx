import './ItemCard.css'

function ItemCard(props){
    const {clubName, imgLink, price} = props;

    return (
        <div className="card" >
            <h3>Jersey {clubName}</h3>
            <img src={imgLink} alt="" />
            <p>${price}</p>
            <button>Agregar</button>
        </div>
    )
}

export default ItemCard;
