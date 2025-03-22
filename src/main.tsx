import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'jotai'
import { App } from '@/components/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
