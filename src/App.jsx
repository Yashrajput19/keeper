import Footer from './components/Footer'
import Header from './components/Header'
import Note from './components/Note'
import { notes } from './notes.js'

function App() {

  return (
    <>
      <Header/>

      { notes.map((noteItem) => {
        return (
          <Note key={noteItem.key} title={noteItem.title} content={noteItem.content}/>
        )
      }) }
      
      <Footer/>
    </>
  )
}

export default App
