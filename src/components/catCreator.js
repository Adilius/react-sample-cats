import React, { useState } from "react";
import axios from "axios";

const CatCreator = ({cats, setCats}) => {

    const [catName, setCatName] = useState(""); // Get from input field
    const [catID, setCatID] = useState(0);      // Cat ID counter
    const [lock, setLock] = useState(false)     // Stop multiple cats from being created at same time

    const createCat = async () => {

        // Check if resourse locked
        if (lock === true) {
            return
        } else {
            setLock(true)
        }

        // Get cat fact
        const catFactResponse = await axios.get("https://catfact.ninja/fact");
        const catFact = catFactResponse.data.fact

        // Get cat picture
        const catPicResponse = await axios.get("https://api.thecatapi.com/v1/images/search");
        const catPic = catPicResponse.data[0].url

        // Get cat ID
        const currentCatID = catID
        setCatID(catID + 1)

        // Create cat
        const cat = {
            name: catName,
            fact: catFact,
            picUrl: catPic,
            ID: currentCatID
        }

        // Simulate longer API-calls with wait
        const sleep = ms => new Promise(r => setTimeout(r, ms))
        await sleep(3000)

        // Unlock resource
        setLock(false)

        // Add cat to list
        setCats((currentCats) => [...currentCats, cat]);

        // Clear input
        setCatName("")

        // Debug
        console.log(cat)
    };

    const handleCatNameChange = (event) => {
        setCatName(event.target.value)
    }

    return (
        <div>
            <div>
                <input
                    label="catName"
                    type="text"
                    id="catName"
                    value={catName}
                    placeholder="Name"
                    onChange={handleCatNameChange}
                />
                <button onClick={createCat} style={{ marginLeft: '5px' }}>Create a cat</button>
            </div>
        </div>
    )
}

export default CatCreator;