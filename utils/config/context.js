import { createContext, useState } from "react";

export const MovieContext = createContext()
export const PreviewContext = createContext()
export const MovieProvider = (props) => {
  const [detailMovie, setDetailMovie] = useState(null)
  return (
    <MovieContext.Provider value={[detailMovie, setDetailMovie]}>
      {props.children}
    </MovieContext.Provider>
  )
}

export const PreviewProvider = (props) => {
  const [preview, setPreview] = useState(null)
  return (
    <PreviewContext.Provider value={[preview, setPreview]}>
      {props.children}
    </PreviewContext.Provider>
  )
}