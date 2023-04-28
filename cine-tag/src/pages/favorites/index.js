import Banner from "components/Banner";
import Cards from "components/Cards";
import Title from "components/Title";
import { useFavContext } from "context/Favoritos";
import style from './Favoritos.module.css'

function Favoritos(){
    const { fav } = useFavContext();

    return(
        <>
        <Banner imagem='favorito' bannerName='Banner da página de favoritos'/>
        <Title page='home'> 
            Meus Favoritos
        </Title>
        <section className={style.container}>
            {fav.map((favo)=>(
                <Cards {...favo} key={favo.id}/>
            ))}
        </section>
        </>
    )
}

export default Favoritos