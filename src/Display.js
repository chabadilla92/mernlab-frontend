import React from "react";

const Display = (props) => {
    const {weeds} = props;

    const loaded = () => (
        <div className="container">
            {weeds.map((weed) => (
                <div className="card">
                    <img className="img" src={weed.img} />
                    <h2>{weed.name}</h2>
                    <h3>{weed.strain}</h3>
                    <button
                        className="edit"
                        onClick={() => {
                        props.selectWeed(weed);
                        props.history.push("/edit");
                        }}
                    >
                    Edit
                    </button>
                    <button
                        className="delete"
                        onClick={() => {
                        props.deleteWeed(weed);
                        }}
                    >
                    Delete
                    </button>
                </div>
            ))}
        </div>
    );

    const loading = <h1>Loading...</h1>

    return weeds.length > 0 ? loaded() : loading;
}

export default Display;