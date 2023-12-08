import Banner from "components/Banner";
import Cards from "components/Cards";
import Title from "components/Title";
import './home.css'
import Container from "components/Container";
import { useEffect, useState } from "react";
import jsonVideos from '../../json/db.json';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home(){
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/MauricioRFilho/demo/videos')
        .then(response => {response.json()})
        .then(data => {
            if(data != undefined && data.status != 404){
                setVideos(data)
            }else{
                setVideos(jsonVideos.Videos)
            }
        })
    },[])
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2
      };
    return(
        <main>
            <Banner imagem='home' bannerName='Banner da página inicial'/>
            <Title page='home'> 
                Meus videos!
            </Title>
            <Container>
                <Slider {...settings}>
                    {videos.map((card)=>(
                        <Cards {...card} key={card.id}/>
                    ))}
                </Slider>  
            </Container>

        </main>
    )
}

export default Home;