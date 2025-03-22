import { Routes } from '@/components/Routes'
import { Header } from '@/components/Header'
import './App-styles.css'

export function App() {
  return (
    <div className={'App-container'}>
      <Header />
      <Routes />
    </div>
  )
}
