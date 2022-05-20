import React, { useCallback, useEffect, useRef } from "react";
import Spinner from 'components/Spinner/index';
import ListOfGifs from 'components/ListOfGifs/index';
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";
import Search from 'components/Search/index'

export default function SearchResults({ params }) {
    const { keyword, rating = 'g' } = params;
    const { loading, gifs, setPage } = useGifs({ keyword, rating });
    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    });

    const title = gifs ? `${gifs.length} Resultados de ${keyword}` : '';

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])

    useEffect(function () {
        if (isNearScreen) debounceHandleNextPage();
    }, [debounceHandleNextPage, isNearScreen])

    return <>
        {loading
            ? <Spinner />
            : <>
                <Helmet>
                    <title>
                        {title}
                    </title>
                    <meta name="description" content={title}></meta>
                </Helmet>
                <Search initialKeyword={keyword} initialRating={rating} />
                <h3 className="App-title">
                    {decodeURI(keyword)}
                </h3>
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef}></div>
            </>
        }
    </>
}