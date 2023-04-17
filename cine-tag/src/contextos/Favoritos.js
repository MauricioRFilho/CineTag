import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos"

export default function FavoritosProvider({children}){
    const [fav, setFav] = useState([]);
    return (
        <FavoritosContext.Provider 
        value={{fav, setFav}}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavContext(){
    const {fav, setFav} = useContext(FavoritosContext);

    function addFav(newFav){
        const favRepeat = fav.some(item => item.id === newFav.id)

        let newList = [...fav]

        if(!favRepeat){
            newList.push(newFav);
            return setFav(newList);
        }
        newList.splice(newList.indexOf(newFav),1)
        return setFav(newList)
    }
    return{
        fav,
        addFav
    }
}