import { atom } from 'jotai'

export type TAppRoutes = 'main' | 'cardEditor'

export const cardTitleAtom = atom<TAppRoutes>('main')
