import Banner from "components/Banner";
import Cards from "components/Cards";
import Title from "components/Title";
import Container from "components/Container";
import { useFavContext } from "context/Favoritos";
import styles from './Favoritos.module.css'

function Favoritos(){
    const { fav } = useFavContext();
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow:2,
        slidesToScroll: 2
      };
    return(
        <main>
            <Banner imagem='favorito' bannerName='Banner da página de favoritos'/>
            <Title page='home'> 
                Meus Favoritos
            </Title>
            <Container>
                    {fav.map((favo)=>(
                        <Cards idCard={"fav"} {...favo} key={favo.id}/>
                    ))}
            </Container>
        </main>
    )
}

export default Favoritos