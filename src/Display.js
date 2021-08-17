import React from "react";

const Display = (props) => {
    const {weeds} = props;

    const loaded = () => (
        <div style={{textAlign: "center"}}>
            {weeds.map((weed) => (
                <article>
                    <img src={weed.img} />
                    <h1>{weed.name}</h1>
                    <h3>{weed.strain}</h3>
                    <button
                        onClick={() => {
                        props.selectWeed(weed);
                        props.history.push("/edit");
                        }}
                    >
                    Edit
                    </button>
                    <button
                        onClick={() => {
                        props.deleteWeed(weed);
                        }}
                    >
                    Delete
                    </button>
                </article>
            ))}
        </div>
    );

    const loading = <h1>Loading...</h1>

    return weeds.length > 0 ? loaded() : loading;
}

export default Display;