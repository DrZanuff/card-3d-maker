import { FC } from 'react'
import { TCardTypes, currentSelectedAtom } from '@/atoms/cardTemplateAtom'
import './CardPreview-styles.css'
import { SampleCardView } from '@/components/views/cardTemplates/sampleCard/SampleCardView'
import { useAtomValue } from 'jotai'

const CardTypes: Record<TCardTypes, FC> = {
  snap: SampleCardView,
  magic: SampleCardView,
}

export function CardPreview() {
  const currentSelectedType = useAtomValue(currentSelectedAtom)

  const CardView3D = CardTypes[currentSelectedType]

  return (
    <div className={'CardPreview-container'}>
      <CardView3D />
    </div>
  )
}
