import { atom } from 'jotai'

export const sampleCardTitleAtom = atom<string>('Card Name')
export const sampleCardPowerAtom = atom<number>(0)
export const sampleCardNumberAtom = atom<number>(999)
export const sampleCardImageAtom = atom<string | null>(null)
export const sampleCardImageSizeAtom = atom<number>(1)
export const sampleCardBackgroundAtom = atom<string | null>(null)
export const sampleAnimateBackgroundAtom = atom<boolean>(false)

export const sampleCardIsMouseOverAtom = atom<boolean>(false)
