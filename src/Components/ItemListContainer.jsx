import './ItemListContainer.css';
import ItemCard from './ItemCard'

function ItemListContainer(){
    return (
        <section className='ItemsContainer'>
            <ItemCard clubName="Real Madrid" imgLink = "src/assets/RealMadrid.webp" price={1999}/>
            <ItemCard clubName="Barcelona" imgLink = "src/assets/Barcelona.png" price={1999}/>
            <ItemCard clubName="Atlético de Madrid" imgLink = "" price={1999}/>
        </section>
    )
}

export default ItemListContainer;