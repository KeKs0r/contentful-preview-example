import React, { Component } from 'react'

class PreviewButton extends Component {
  constructor(props){
    super(props)
    const api = props.api
    this.state = {
      key: api.entry.fields.key
    }
  }

  componentDidMount(){
    const { api } = this.props
    api.window.updateHeight()
    const keyField = api.entry.fields.key
    keyField.onValueChanged(this.onChange)
  }

  onChange(key){
    this.setState({
      key
    })
  }

  render() {
    const { key } = this.state
   return (
     <a href="#">Preview ({key})</a>
   )
  }
}