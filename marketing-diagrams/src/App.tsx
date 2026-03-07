import { OpenAIFrontierDiagram } from './diagrams/OpenAIFrontier'

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
      <OpenAIFrontierDiagram />
    </div>
  )
}

export default App
