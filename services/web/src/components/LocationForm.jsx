import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class DestinationForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      errors: {},
      added_by: '',
      name: '',
      state: '',
      country: '',
      notes: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  onSubmit (event) {
    event.preventDefault();
    this.props.CreateDestination(this.state, (errorMessage) => {
      if (errorMessage) {
        this.props.createFlashMessage(errorMessage, 'error');
      }
    });
  }
  render () {
    const { added_by, name, state, country, notes } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          <h1>Locations</h1>
          <hr/><br/>
          <form
            onSubmit={(event) => {
              this.onSubmit(event)
            }}
            className='form-horizontal'>
            <div className='form-group'>
              <label
                htmlFor='added_by'
                className='col-md-2 control-label'>
                User
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='added_by'
                  name='added_by'
                  value={added_by}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <label
                htmlFor='name'
                className='col-md-2 control-label'>
                Name
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  name='name'
                  value={name}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <label
                htmlFor='state'
                className='col-md-2 control-label'>
                State
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='state'
                  name='state'
                  value={state}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <label
                htmlFor='country'
                className='col-md-2 control-label'>
                Country
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='country'
                  name='country'
                  value={country}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <label
                htmlFor='notes'
                className='col-md-2 control-label'>
                Notes
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='notes'
                  name='notes'
                  value={notes}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <div className='col-md-offset-2 col-md-10'>
                <button
                  type='submit'
                  className='btn btn-success'
                >Save</button>
                &nbsp;
                <Link
                  to='/'
                  className='btn btn-primary'
                >Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default DestinationForm
