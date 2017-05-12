import React, { Component } from 'react'
import { Container, Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class App extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Container>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field label='An HTML <input>' control='input' id="input" />
            <Form.Field id="gender" label='An HTML <select>' control='select'>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </Form.Field>
          </Form.Group>
          <Form.Group grouped>
            <fieldset>
              <legend>Radio Buttons</legend>
              <Form.Field label='This one' control='input' type='radio' name='htmlRadios' />
              <Form.Field label='That one' control='input' type='radio' name='htmlRadios' />
            </fieldset>     
          </Form.Group>
          <Form.Group grouped>
          <fieldset>
            <legend>HTML checkboxes</legend>
              <Form.Field label='This one' control='input' type='checkbox' />
              <Form.Field label='That one' control='input' type='checkbox' />
            </fieldset>  
          </Form.Group>
          <Form.Field label='An HTML <textarea>' id="textarea" control='textarea' rows='3' />
          <Form.Field control='button'>
            HTML Button
          </Form.Field>
      </Form>
    </Container>
    )
  }
}

export default App
