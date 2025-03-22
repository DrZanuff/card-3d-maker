import { atom } from 'jotai'

export type TCardTypes = 'snap' | 'magic'

export const currentSelectedAtom = atom<TCardTypes>('snap')
