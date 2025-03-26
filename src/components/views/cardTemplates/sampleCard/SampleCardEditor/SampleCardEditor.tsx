import { useAtom, useSetAtom } from 'jotai'
import {
  sampleCardNumberAtom,
  sampleCardPowerAtom,
  sampleCardTitleAtom,
  sampleCardImageAtom,
  sampleCardImageSizeAtom,
  sampleCardBackgroundAtom,
  sampleAnimateBackgroundAtom,
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
  const [imageSize, setImageSize] = useAtom(sampleCardImageSizeAtom)
  const setImage = useSetAtom(sampleCardImageAtom)
  const setBackground = useSetAtom(sampleCardBackgroundAtom)
  const [isBackgroundAnimated, setIsBackgroundAnimated] = useAtom(
    sampleAnimateBackgroundAtom,
  )

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

  const handleCardImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImage(url)
    }
  }

  const handleCardBackgroundUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setBackground(url)
    }
  }

  const handleImageSizeChange = (value: string) => {
    const newSize = parseFloat(value)
    setImageSize(newSize)
  }

  const handleChangeBackgroundAnimated = (state: boolean) => {
    setIsBackgroundAnimated(state)
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

        <div>
          <label>Card Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCardImageUpload}
          />
        </div>

        <div>
          <label>Card Image Size</label>
          <input
            type="range"
            min="1"
            max="2"
            step="0.1"
            value={imageSize}
            onChange={(e) => handleImageSizeChange(e.target.value)}
          />
        </div>

        <div>
          <label>Card Background</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCardBackgroundUpload}
          />
        </div>

        <div>
          <label>Animate Background</label>
          <input
            type="checkbox"
            checked={isBackgroundAnimated}
            onChange={(e) => handleChangeBackgroundAnimated(e.target.checked)}
          />
        </div>
      </div>
    </div>
  )
}
