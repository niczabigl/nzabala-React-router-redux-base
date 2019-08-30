import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Home from './views/home'
import About from './views/about'
import SideMenu from './components/sidemenu'
import Notification from './components/notification'

class Routes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showsidemenu: false
    }
    this.hideSidemenu = this.hideSidemenu.bind(this)
  }
  hideSidemenu () {
    this.setState({ showsidemenu: false })
  }
  render () {
    return (
      <Router>
        <div className='w3-container'>
          <SideMenu show={this.state.showsidemenu} />
          <Notification />
        </div>
        <div onClick={this.hideSidemenu} className=''>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route render={() => <Redirect to='/' />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Routes
