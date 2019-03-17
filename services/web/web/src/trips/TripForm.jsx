import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class EquipmentForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      errors: {},
      addedBy: '',
      month: '',
      year: '',
      days: '',
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
    this.props.CreateEquipment(this.state, (errorMessage) => {
      if (errorMessage) {
        this.props.createFlashMessage(errorMessage, 'error');
      }
    });
  }
  render () {
    const { addedBy, month, year, days } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          <h1>Trip</h1>
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
                Added By
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
                htmlFor='month'
                className='col-md-2 control-label'>
                Month
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='month'
                  name='month'
                  value={month}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <label
                htmlFor='year'
                className='col-md-2 control-label'>
                Year
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='year'
                  name='year'
                  value={year}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <label
                htmlFor='days'
                className='col-md-2 control-label'>
                Days
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='days'
                  name='days'
                  value={days}
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

export default EquipmentForm
