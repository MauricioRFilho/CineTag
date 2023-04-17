import Banner from 'components/Banner';
import Titulo from 'components/Title';
import { useParams } from 'react-router-dom';
// import videos from 'json/db.json';
import styles from './Player.module.css';
import NotFound from 'pages/NotFound';
import { useEffect, useState } from 'react';

function Player() {
    const parametros = useParams();
    const [video, setVideos] = useState([]);
    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/MauricioRFilho/dbcine/videos?id=${parametros.id}`)
        .then(response => response.json())
        .then(data => {
            setVideos(...data)
        })
    }, [])

    if (!video) {
        return <NotFound />

    }
    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;