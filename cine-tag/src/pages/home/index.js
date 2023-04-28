import Banner from "components/Banner";
import Cards from "components/Cards";
import Title from "components/Title";
import './home.css'
import Container from "components/Container";
import { useEffect, useState } from "react";


function Home(){
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/MauricioRFilho/dbcine/videos')
        .then(response => response.json())
        .then(data => {
            setVideos(data)
        })
    },[])

    return(
        <>
        <Banner imagem='home' bannerName='Banner da página inicial'/>
        <Title page='home'> 
            Meus videos!
        </Title>
        <Container>

        {/* {videos.map(card => <Cards titulo={card.titulo} capa={card.capa} key={card.id} id={card.id}/>) }  */}
        {/* AQUI FOI A PRIMEIRA FORMA QUE APRENDI  */}

        {videos.map((card)=>(
             <Cards {...card} key={card.id}/>
        ))}
        {/* A segunda forma não precisa atribuir as keys se os valores forem iguais */}

        </Container>

        </>
    )
}

export default Home;