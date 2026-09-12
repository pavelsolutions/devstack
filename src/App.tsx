import { Suspense } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technology/Technologies"
import type { ITechnology } from "./types/technology"

const technologyFetch = async (): Promise<ITechnology[]> => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
}

function App() {
  const technologiesPromise = technologyFetch();

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h1>Loading........</h1>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
