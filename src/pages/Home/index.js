import React from "react";
import ListOfGifs from "components/ListOfGifs";
import Search from 'components/Search/index'
import './styles.css';
import useGifs from "hooks/useGifs";
import TrendingSearches from "components/TrendingSearches";
import { Helmet } from "react-helmet";

export default function Home() {
    const { gifs } = useGifs()

    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <Search />
            <div className="row">
                <div className="App-results col">
                    <h3 className="App-title">Última Búsqueda</h3>
                    <ListOfGifs gifs={gifs} />
                </div>

                <div className="App-category col">
                    <TrendingSearches />
                </div>
            </div>
        </>
    )

}