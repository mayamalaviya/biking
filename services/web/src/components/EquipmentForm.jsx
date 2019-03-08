import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class EquipmentForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      errors: {},
      item: '',
      make: '',
      model: '',
      year_bought: '',
      primary_user: '',
      usage_quantity: '',
      usage_unit: '',
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
    const { item, make, model, year_bought, primary_user, usage_quantity, usage_unit } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          <h1>Equipment</h1>
          <hr/><br/>
          <form
            onSubmit={(event) => {
              this.onSubmit(event)
            }}
            className='form-horizontal'>
            <div className='form-group'>
              <label
                htmlFor='item'
                className='col-md-2 control-label'>
                Item
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='item'
                  name='item'
                  value={item}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <label
                htmlFor='make'
                className='col-md-2 control-label'>
                Make
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='make'
                  name='make'
                  value={make}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <label
                htmlFor='model'
                className='col-md-2 control-label'>
                Model
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='model'
                  name='model'
                  value={model}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <label
                htmlFor='year_bought'
                className='col-md-2 control-label'>
                Year Bought
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='year_bought'
                  name='year_bought'
                  value={year_bought}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <label
                htmlFor='primary_user'
                className='col-md-2 control-label'>
                Primary User
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='primary_user'
                  name='primary_user'
                  value={primary_user}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <label
                htmlFor='usage_quantity'
                className='col-md-2 control-label'>
                Usage
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='usage_quantity'
                  name='usage_quantity'
                  value={usage_quantity}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className='form-group'>
              <label
                htmlFor='usage_unit'
                className='col-md-2 control-label'>
                Unit
              </label>
              <div className='col-md-10'>
                <input
                  type='text'
                  className='form-control'
                  id='usage_unit'
                  name='usage_unit'
                  value={usage_unit}
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
