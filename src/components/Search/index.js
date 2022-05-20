import React, { useCallback } from "react";
import "./styles.css";
import { useLocation } from "wouter";
import useForm from "./hook";

const RATINGS = ['g', 'pg', 'pg-13', 'r']


function Search({ initialKeyword = '', initialRating = 'g' }) {
    const [, pushLocation] = useLocation();

    const { search, rating, times, updateKeyword, updateRating } = useForm({
        initialKeyword,
        initialRating
    })

    const handleChange = evt => {
        updateKeyword(evt.target.value);
    }

    const handleChangeRating = evt => {
        updateRating(evt.target.value);
    }

    const handleSubmit = useCallback(evt => {
        evt.preventDefault()
        //navegar
        pushLocation(`/search/${search}/${rating}`)
    }, [pushLocation, search, rating])

    return (
        <div className="App">
            <section>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Search a gif..."
                        onChange={handleChange}
                        type='text'
                        value={search} />
                    <select onChange={handleChangeRating} value={rating}>
                        <option disabled>
                            Rating type
                        </option>
                        {RATINGS.map(rating =>
                            <option key={rating}>
                                {rating}
                            </option>)}
                    </select>
                    {times}
                </form>
            </section>
        </div>
    );
}

export default React.memo(Search);
