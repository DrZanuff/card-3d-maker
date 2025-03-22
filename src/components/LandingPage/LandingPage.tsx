import { useSetAtom } from 'jotai'
import { cardTitleAtom } from '@/atoms/routeAtom'
import './LandingPage-styles.css'

export function LandingPage() {
  const changePage = useSetAtom(cardTitleAtom)

  const handleChangePage = () => {
    changePage('cardEditor')
  }

  return (
    <div className={'LandingPage-container'}>
      <h1>LandingPage</h1>
      <button onClick={handleChangePage}>Create a Card</button>
    </div>
  )
}
