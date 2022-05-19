import React from "react";
import { Link } from "wouter";
import './styles.css'

export default function Home({ name, options = [] }) {

    return (
        <section>
            <h3>{name}</h3>
            {options.map((singleOption, index) => (
                <li
                    key={singleOption}
                    index={index}
                    type='primary'
                >
                    <Link className="category-name" to={`/search/${singleOption}`}>
                        {singleOption}
                    </Link>
                </li>
            ))}
        </section>
    )

}