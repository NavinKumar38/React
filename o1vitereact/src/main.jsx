import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
  return (
    <div>
      <h1> my App</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href:"https://google.com", target:'_blank'},
  'click me to google'
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

  // anotherElement,

  // reactElement,
)
