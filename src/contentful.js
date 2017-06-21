import { ready } from './utils'
import { init } from 'contentful-ui-extensions-sdk'
/*
export const init = (cb) => {
  let state = require('../data/basic-render-q-and-a.json')
  const api = {
    window: {
      updateHeight() { 
        // console.log('api.window.updateHeight') 
      },
      startAutoResizer() {
        // console.log('api.window.startAutoResizer')
      }
    },
    field: {
      setValue(value) {
        console.log('field.set', value)
        state = value 
      },
      getValue() {
        console.log('field.get', state)
        return state
      }
    }
  }
  cb(api)
}
*/
export const boot = (cb) => ready(init(cb))