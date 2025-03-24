import { useAtom } from 'jotai'
import { sampleCardPowerAtom, sampleCardTitleAtom } from '../sampleCardAtoms'
import './SampleCardEditor-styles.css'

export const SAMPLE_CARD_CONFIG = {
  TITLE_LENGHT: 24,
  TITLE_BREAK_LENGHT: 12,
  NUMBER_LIMIT: 99,
}

export function SampleCardEditor() {
  const [title, setTitle] = useAtom(sampleCardTitleAtom)
  const [power, setPower] = useAtom(sampleCardPowerAtom)

  const handleTitleChange = (value: string) => {
    const newTitle = value.substring(0, SAMPLE_CARD_CONFIG.TITLE_LENGHT)
    setTitle(newTitle)
  }

  const handlePowerChange = (value: string) => {
    const powerNumber = Math.round(
      Math.min(SAMPLE_CARD_CONFIG.NUMBER_LIMIT, Number(value)),
    )
    setPower(Math.abs(powerNumber))
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

        <label>Card Power</label>
        <input
          type="number"
          value={power}
          onChange={(e) => handlePowerChange(e.target.value)}
        />
      </div>
    </div>
  )
}
