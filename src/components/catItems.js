import React from "react";

const CatItems = ({ cats, setCats }) => {

    // Delete cat from cat list
    const deleteCat = (catID) => {
        setCats((currentCats) => currentCats.filter((cat) => cat.ID !== catID));
    }

    return (
        <div>
            {cats.map((cat) => (
                <div key={cat.ID} style={{ backgroundColor: '#d3d3d3', display: 'inline-block', margin: '10px', padding: '10px', width: '300px'}}>
                    <h3>{cat.name}</h3>
                    <img src={cat.picUrl} alt="alt" width="200" height="200" />
                    <p>{cat.fact}</p>
                    <button onClick={() => deleteCat(cat.ID)}>Delete</button>
                </div>
            ))}
        </div>
    )

}

export default CatItems;