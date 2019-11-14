import React, { Component } from 'react'

import { Button, Navbar } from 'onexp'

export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar>
            <Navbar.Group>
            <Navbar.Heading>Blueprint</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
        </Navbar>
      </div>
    )
  }
}
