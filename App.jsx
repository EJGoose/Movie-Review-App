import './CSS/App.css'
import Header from './Components/Header'
import Movie from './Components/Movie'

function App() {
  

  return (
    <>
    <Header title="Movie Review App" subtitle="find the latest reviews for your favourite films" />
        <main>
          <Movie />
        </main>
    </>
  )
}

export default App


