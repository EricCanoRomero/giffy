import React from "react";
import Gif from "components/Gif/index";
import './styles.css'

export default function ListOfGifs({ gifs }) {
    return <div className="ListOfGifs">
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    className="ListOfGifs-item"
                    key={id}
                    id={id}
                    title={title}
                    url={url}
                />
            )
        }
    </div>
}