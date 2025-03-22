import { CardPreview } from '../CardPreview'
import { CardTemplateConfig } from '../CardTemplateConfig'
import { CardTemplateSelector } from '../CardTemplateSelector'
import './CardEditor-styles.css'

export function CardEditor() {
  return (
    <div className={'CardEditor-container'}>
      <div className="editor-body">
        <div className="left-area">
          <CardPreview />
          <CardTemplateSelector />
        </div>
        <div className="right-area">
          <CardTemplateConfig />
        </div>
      </div>
    </div>
  )
}
