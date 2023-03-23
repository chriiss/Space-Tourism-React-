import { useState, useEffect } from "react"
import { Route, Routes, NavLink } from "react-router-dom"
import dataJson from "./data/DataJson.json";
import styles from "./styles/App.module.scss"
import Navbar from "./components/header/Navbar"
import Home from "./components/home/Home"
import Destination from "./components/destination/Destination"
import Crew from "./components/crew/Crew"
import Technology from "./components/technology/Technology"


const App = () => {
  return (
    <div>
      <header>
        <Navbar useState={useState} useEffect={useEffect} dataJson={dataJson} styles={styles} NavLink={NavLink} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home styles={styles} dataJson={dataJson} />} />
          <Route path="/destination" element={<Destination useState={useState} styles={styles} dataJson={dataJson} />} />
          <Route path="/crew" element={<Crew useState={useState} styles={styles} dataJson={dataJson} />} />
          <Route path="/technology" element={<Technology useState={useState} styles={styles} dataJson={dataJson} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
