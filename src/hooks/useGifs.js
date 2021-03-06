import { useContext, useEffect, useState } from "react";
import getGifs from "services/getGifs";
import GifsContext from "context/GifsContext";

const INITIAL_PAGE = 0

export default function useGifs({ keyword, rating } = { keyword: null }) {

    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const { gifs, setGifs } = useContext(GifsContext);
    const [page, setPage] = useState(INITIAL_PAGE);

    //recuperamos la keyword del localstorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(function () {
        setLoading(true);

        getGifs({ keyword: keywordToUse, rating })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false);
                //guardamos la keyword en el localstorage
                if (keyword) localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, keywordToUse, rating, setGifs])

    useEffect(function () {
        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs({ keyword: keywordToUse, rating, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    }, [keywordToUse, page, rating, setGifs])

    return { loading, loadingNextPage, gifs, setPage };
}