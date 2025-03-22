import { useAtom } from 'jotai'
import { sampleCardTitleAtom } from '../sampleCardAtoms'
import './SampleCardEditor-styles.css'

export const SAMPLE_CARD_CONFIG = {
  TITLE_LENGHT: 24,
  TITLE_BREAK_LENGHT: 12,
}

export function SampleCardEditor() {
  const [title, setTitle] = useAtom(sampleCardTitleAtom)

  const handleTitleChange = (value: string) => {
    const newTitle = value.substring(0, SAMPLE_CARD_CONFIG.TITLE_LENGHT)
    setTitle(newTitle)
  }

  return (
    <div className={'SampleCardEditor-container'}>
      <h2>Sample Card template configuration</h2>
      <div>
        <label>Card Name</label>
        <input
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
        />
      </div>
    </div>
  )
}
