import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard';

const ImageList=(props)=>
{
    const newimage=props.images.map((image)=>{
        return <ImageCard key={image.id} image={image}/>
    })
    return <div className="image-list">
        {newimage}
    </div>
}
export default ImageList;