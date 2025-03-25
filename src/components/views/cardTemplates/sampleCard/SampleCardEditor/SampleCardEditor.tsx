import { useAtom } from 'jotai'
import {
  sampleCardNumberAtom,
  sampleCardPowerAtom,
  sampleCardTitleAtom,
} from '../sampleCardAtoms'
import './SampleCardEditor-styles.css'

export const SAMPLE_CARD_CONFIG = {
  TITLE_LENGHT: 24,
  TITLE_BREAK_LENGHT: 12,
  POWER_NUMBER_LIMIT: 99,
  CARD_NUMBER_LIMIT: 999,
}

export function SampleCardEditor() {
  const [title, setTitle] = useAtom(sampleCardTitleAtom)
  const [power, setPower] = useAtom(sampleCardPowerAtom)
  const [cardNumber, setCardNumber] = useAtom(sampleCardNumberAtom)

  const handleTitleChange = (value: string) => {
    const newTitle = value.substring(0, SAMPLE_CARD_CONFIG.TITLE_LENGHT)
    setTitle(newTitle)
  }

  const handlePowerChange = (value: string) => {
    const powerNumber = Math.round(
      Math.min(SAMPLE_CARD_CONFIG.POWER_NUMBER_LIMIT, Number(value)),
    )
    setPower(Math.abs(powerNumber))
  }

  const handleCardNumberChange = (value: string) => {
    const newCardNumber = Math.round(
      Math.min(SAMPLE_CARD_CONFIG.CARD_NUMBER_LIMIT, Number(value)),
    )
    setCardNumber(Math.abs(newCardNumber))
  }

  return (
    <div className={'SampleCardEditor-container'}>
      <h2>Sample Card template configuration</h2>
      <div>
        <div>
          <label>Card Name</label>
          <input
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
          />
        </div>

        <div>
          <label>Card Power</label>
          <input
            type="number"
            value={power}
            onChange={(e) => handlePowerChange(e.target.value)}
          />
        </div>

        <div>
          <label>Card Number</label>
          <input
            type="number"
            value={cardNumber}
            onChange={(e) => handleCardNumberChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
