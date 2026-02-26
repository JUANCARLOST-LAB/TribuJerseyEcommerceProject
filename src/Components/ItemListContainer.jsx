import './ItemListContainer.css';
import ItemCard from './ItemCard'

function ItemListContainer(props){
    const {mensaje} = props; 

    return (
        <section>
            <h3 style={{marginTop:"12%"}}>{mensaje}</h3>
            <section className='ItemsContainer'>
            <ItemCard clubName="Real Madrid" imgLink = "src/assets/RealMadrid.webp" price={1999}/>
            <ItemCard clubName="Barcelona" imgLink = "src/assets/Barcelona.png" price={1999}/>
            <ItemCard clubName="Atlético de Madrid" imgLink = "src/assets/AtleticoDeMadrid.png" price={1999}/>
        </section>
        </section>
    )
}

export default ItemListContainer;