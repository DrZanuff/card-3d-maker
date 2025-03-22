import type { CardTemplateConfigProps } from './CardTemplateConfig.types'
import './CardTemplateConfig-styles.css'

export function CardTemplateConfig ( { value } : CardTemplateConfigProps ) {

  return (
    <div className={"CardTemplateConfig-container"}>
      <h1>CardTemplateConfig</h1>
      <h2>{value}</h2>
    </div>
  )
}