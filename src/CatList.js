// write your CatList component here
import React from 'react'

const CatList = (props) => {
    
    const pics = props.catPics.map((pic) => {
        return <div key={pic.id}><img src={pic.url} alt={pic.id}/></div>
    })
    return (
        <div>
            {pics}
        </div>
    )
}

export default CatList
