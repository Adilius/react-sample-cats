import React from 'react';
import CatItems from './catItems';

const CatDisplay = ({ cats, setCats }) => {


    return (
        <div display={{display: 'flex'}}>
        <h2>List of cats</h2>
        <CatItems cats={cats} setCats={setCats}/>
        </div>
    )
}

export default CatDisplay;