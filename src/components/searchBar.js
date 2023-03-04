import React from "react"
import "../assets/styles/searchBar.css"
import { FaSearch } from "react-icons/fa"
function SearchBar() {
  return (
    <>
      <div className="bar-wrapper">
        <div className="search-icon">
          <FaSearch color="grey" />
        </div>

        <input type="text" placeholder="Buscar por nombre o email" />
      </div>
    </>
  )
}

export default SearchBar
