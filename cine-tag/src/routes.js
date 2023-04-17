import Favoritos from "pages/favoritos";
import Home from "pages/home";
import Player from "pages/player";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoritosProvider from "contextos/Favoritos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "pages/NotFound";

function AppRouter(){
    return(

        //avisa que existem rotas dentro dele
        <BrowserRouter>       
        <Header/>
            <FavoritosProvider>
                    {/* esse seria o roteador */}
                    <Routes>
                        {/* aqui ficam as rotas em si */}
                        <Route path="/" element={<Home />}/>
                        <Route path="/Favoritos" element={<Favoritos />} />
                        <Route path=":id" element={<Player />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
            </FavoritosProvider>
        <Footer/>
        </BrowserRouter>

    )
}

export default AppRouter