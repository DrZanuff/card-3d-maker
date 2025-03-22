import { TCardTypes } from '@/atoms/cardTemplateAtom'

type TCardTypeOptions = {
  type: TCardTypes
  name: string
  thumbnail: string
}

export const cardTemplates: TCardTypeOptions[] = [
  { name: 'Magic Type', type: 'magic', thumbnail: '/magic.png' },
  { name: 'Snap Type', type: 'snap', thumbnail: '/snap.png' },
]
