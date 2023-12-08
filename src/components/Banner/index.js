import styles from './Banner.module.css'
import bannerHome from './banner-home.png'
import bannerFav from './banner-favoritos.png'
import bannerPlayer from './banner-player.png'



function Banner({bannerName, imagem}){
    var banner;
    switch(imagem){
        case 'home':
        banner = bannerHome
        break
        case 'favorito':
        banner = bannerFav
        break
        case 'player':
        banner = bannerPlayer
        break
        default :
        banner = bannerHome
        break
    }
    return(
        <div className={styles.Banner}>
            <img className={styles.Banner} src={banner} alt={bannerName}/>
        </div>
    )
}
export default Banner