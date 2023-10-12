import { Brand, Navbar, Cta } from './components'
import {
  Footer,
  Blog,
  Features,
  Header,
  Possiblity,
  WhatGpt3,
} from './containers'

export default function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />

      <Possiblity />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}
