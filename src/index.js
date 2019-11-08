import React from 'react'
import ReactDOM from 'react-dom'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      globalTitle: 'lame-duck title',
      title: ''
    }
  }

  componentDidMount () {
    console.log('Rendered Form')
  }

  onInputChange = e => {
    this.setState({ title: e.target.value })
  }

  onButtonClick = e => {
    this.setState({ globalTitle: 'My form -' })
    e.preventDefault()
  }

  componentDidUpdate () {
    console.log('Title changed')
  }

  render () {
    return (
      <div>
        <form>
          <h1>{this.state.globalTitle}</h1>
          <input onChange={this.onInputChange} value={this.state.title} />
          <button onClick={this.onButtonClick}>Validate</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<Form />, document.querySelector('#root'))
