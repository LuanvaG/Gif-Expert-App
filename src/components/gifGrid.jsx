import { useState,useEffect } from "react"
// import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./gifGridItem"
import { useFechGifs } from "../hooks/useFechGifs"

export const GifGrid = ({category}) => {

  
  const { images, isLoadnig } = useFechGifs(category)

  return (
    <>

    <h3>{category}</h3>
    {
      isLoadnig && (<h2>Cargando...</h2>)
    }


    <div className="card-grid">
    {
        
      images.map( (images) => (
          <GifItem 
            key={images.id} 
            {...images}
          />
      ))

    }
    </div>

    </>
  )
}
