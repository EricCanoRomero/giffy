import React, { useCallback, useState } from "react";
import "./styles.css";
import { useLocation } from "wouter"

function Search() {

    const [search, setSearch] = useState('');

    const [, pushLocation] = useLocation();

    const handleSubmit = useCallback(evt => {
        evt.preventDefault()
        //navegar
        pushLocation(`/search/${search}`)
    }, [pushLocation, search])

    const handleChange = evt => {
        setSearch(evt.target.value)
    }

    return (
        <div className="App">
            <section>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Search a gif..." onChange={handleChange} type='text' value={search} />
                </form>
            </section>
        </div>
    );
}

export default React.memo(Search);
