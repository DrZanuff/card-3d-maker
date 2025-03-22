import { FC } from 'react'
import { useAtomValue } from 'jotai'
import { TAppRoutes, cardTitleAtom } from '@/atoms/routeAtom'
import { LandingPage } from '@/components/LandingPage'
import { CardEditor } from '@/components/views/cardEditor/CardEditor'
import './Routes-styles.css'

const AppRoutes: Record<TAppRoutes, FC> = {
  cardEditor: CardEditor,
  main: LandingPage,
}

export function Routes() {
  const route = useAtomValue(cardTitleAtom)

  const PageComponent = AppRoutes[route]

  return (
    <div className={'Routes-container'}>
      <PageComponent />
    </div>
  )
}
