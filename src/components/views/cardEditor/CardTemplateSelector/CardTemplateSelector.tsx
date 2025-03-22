import { cardTemplates } from './cardsTemplates'
import { useAtom } from 'jotai'
import { TCardTypes, currentSelectedAtom } from '@/atoms/cardTemplateAtom'
import { getImgUrl } from '@/helpers/get'
import './CardTemplateSelector-styles.css'

export function CardTemplateSelector() {
  const [currentSelectedType, setCurrentSelectedType] =
    useAtom(currentSelectedAtom)

  const handleSelectCard = (type: TCardTypes) => {
    setCurrentSelectedType(type)
  }

  return (
    <div className={'CardTemplateSelector-container'}>
      <h1>CardTemplateSelector</h1>
      <div className="card-selection">
        {cardTemplates.map((card, index) => {
          return (
            <div
              key={`${card.name}-${index}`}
              className={`card-thumb ${card.type === currentSelectedType ? 'selected' : ''}`}
              onClick={() => handleSelectCard(card.type)}
            >
              <img src={getImgUrl(card.thumbnail)} alt={card.name} />
              <span>{card.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
