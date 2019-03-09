import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class DestinationForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      errors: {},
      addedBy: '',
      location: '',
      summary: '',
      detail: '',
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
    const { addedBy, location, summary, detail } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          <h1>Destination</h1>
          <hr/><br/>
          <form
            onSubmit={(event) => {
              this.onSubmit(event)
            }}
            className='form-horizontal'>
            <div className='form-group'>
              <label
                htmlFor='addedBy'
                className='col-md-2 control-label'>
                User
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='addedBy'
                  name='addedBy'
                  value={addedBy}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <label
                htmlFor='location'
                className='col-md-2 control-label'>
                Location
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='location'
                  name='location'
                  value={location}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <label
                htmlFor='summary'
                className='col-md-2 control-label'>
                Summary
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='summary'
                  name='summary'
                  value={summary}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <label
                htmlFor='detail'
                className='col-md-2 control-label'>
                Detail
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='detail'
                  name='detail'
                  value={detail}
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
