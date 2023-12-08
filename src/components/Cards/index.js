import styles from './Cards.module.css'
import favIcon from './favorite_outline.png'
import unFav from './favorite.png'
import { useFavContext } from 'context/Favoritos'
import { Link } from 'react-router-dom';

function Cards({id, titulo, capa, idCard}){
    const {fav, addFav } = useFavContext();
    const isFav = fav.some((favo) => favo.id === id);
    const icon = isFav ? unFav : favIcon 
    // aqui o icone fica contrario, precisamos o preenchido quando for para desfavoritar.
    return(
        <div id={idCard} className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icon}
                alt="Favoritar filme"
                className={styles.favoritar}
                onClick={() => {
                    addFav({ id, titulo, capa })
                }} />
        </div>
    )
}
export default Cards