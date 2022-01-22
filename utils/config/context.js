import { createContext, useContext, useState } from "react";

export const MovieContext = createContext()
export const PreviewContext = createContext()
export const showMenuContext = createContext()
export const SimilarMovieContext = createContext()

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


export const ShowMenuProvider = (props) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <showMenuContext.Provider value={[showMenu, setShowMenu]} >
      {props.children}
    </showMenuContext.Provider>
  )
}

export const SimilarMovieProvider = (props) => {
  const [similarMovie, setSimilarMovie] = useState(null)
  return (
    <SimilarMovieContext.Provider value={[similarMovie, setSimilarMovie]}>
      {props.children}
    </SimilarMovieContext.Provider>
  )
}