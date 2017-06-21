import React from 'react'
import { render } from 'react-dom'

import { boot } from './contentful'
import PreviewButton from './preview-button'

boot(api => {
  api.window.startAutoResizer()

  render(
    <PreviewButton api={api} />,
    document.getElementById('root')
  )
})