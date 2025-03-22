import { FC } from 'react'
import { TCardTypes, currentSelectedAtom } from '@/atoms/cardTemplateAtom'
import { SampleCardEditor } from '../../cardTemplates/sampleCard/SampleCardEditor'
import './CardTemplateConfig-styles.css'
import { useAtomValue } from 'jotai'

const CardEditorTypes: Record<TCardTypes, FC> = {
  snap: SampleCardEditor,
  magic: SampleCardEditor,
}

export function CardTemplateConfig() {
  const type = useAtomValue(currentSelectedAtom)

  const CardEditor = CardEditorTypes[type]

  return (
    <div className={'CardTemplateConfig-container'}>
      <CardEditor />
    </div>
  )
}
