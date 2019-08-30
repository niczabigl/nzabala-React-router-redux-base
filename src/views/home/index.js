import React from 'react'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      demo1: { x: 0, y: 0 }
    }
    this.mousemoveevent = this.mousemoveevent.bind(this)
  }

  mousemoveevent (e) {
    this.setState({ demo1: { x: e.clientX, y: e.clientY } })
  }

  render () {
    return (
      <div>
        <h1 className='w3-center'>Home</h1>
        <div onMouseMove={this.mousemoveevent} className={`w3-display-middle`} style={{ height: '150px', width: '150px', backgroundColor: 'teal' }}>
          <div>{JSON.stringify(this.state.demo1)}</div>
        </div>
      </div>
    )
  }
}

export default Home
