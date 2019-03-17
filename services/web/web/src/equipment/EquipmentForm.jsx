import React, {Component} from 'react';
import AppBar from '../_components/appbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../_components/nav';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { equipmentAction } from '../_actions/equipment.actions';



const drawerWidth = 240;

const styles = theme => ({

    root: {
        flexGrow: 1,
      },

  contentRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },

  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class EquipmentForm extends Component {

  handleChange = prop => event => {
    const { dispatch } = this.props;
    dispatch(equipmentAction.onChangeProps(prop, event));
  };

  componentDidMount() {
    const { match : {params } } = this.props;

    if(params.id){
      const { dispatch } = this.props;
      dispatch(equipmentAction.getEquipmentById(params.id));
    }
  }

  handleClick(event){
    const { match : {params } } = this.props;
    const { dispatch } = this.props;

    let payload={
      item: this.props.equipment.item,
      make: this.props.equipment.make,
      model: this.props.equipment.model,
      year_bought: this.props.equipment.year_bought,
      primary_user: this.props.equipment.primary_user,
      usage_quantity: this.props.equipment.usage_quantity,
      usage_unit: this.props.equipment.usage_unit,
    }

    if(params.id){
      dispatch(equipmentAction.editEquipmentInfo(params.id, payload));
    } else {
      dispatch(equipmentAction.createEquipment(payload));
    }
  }

  render() {
    const { classes } = this.props;
    const { match : {params } } = this.props;
    console.log(this.props.equipment);
    

    function InsertText(props) {
       return <Typography>{'Add New Equipment'}</Typography>;
     }
     
     function EditText(props) {
         return <Typography>{'Edit Equipment'}</Typography>;
     }

    function SegHeader() {
        if(params.id){
            return <EditText />;
        }
        return <InsertText />;
    }
    
    return (
      <div className={classes.root}>
            <div className={classes.appFrame}>
            <AppBar/>
            <Nav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <SegHeader />
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={3} container justify="flex-end">                            
                    </Grid>
                </Grid>
                <br />
                <br />
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <div>
                            <Paper className={classes.contentRoot} elevation={1}>
                                <form className={classes.container}>
                                    <Grid container spacing={24}>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="item"
                                                label="Item"
                                                className={classes.textField}
                                                value={this.props.equipment.item}
                                                onChange={this.handleChange('item')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="make"
                                                label="Make"
                                                className={classes.textField}
                                                value={this.props.equipment.make}
                                                onChange={this.handleChange('make')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="model"
                                                label="Model"
                                                className={classes.textField}
                                                value={this.props.equipment.model}
                                                onChange={this.handleChange('model')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="year_bought"
                                                label="Year"
                                                multiline
                                                rowsMax="4"
                                                className={classes.textField}
                                                value={this.props.equipment.year_bought}
                                                onChange={this.handleChange('year_bought')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="primary_user"
                                                label="User"
                                                multiline
                                                rowsMax="4"
                                                className={classes.textField}
                                                value={this.props.equipment.primary_user}
                                                onChange={this.handleChange('primary_user')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="usage_quantity"
                                                label="Usage"
                                                multiline
                                                rowsMax="4"
                                                className={classes.textField}
                                                value={this.props.equipment.usage_quantity}
                                                onChange={this.handleChange('usage_quantity')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="usage_unit"
                                                label=" "
                                                multiline
                                                rowsMax="4"
                                                className={classes.textField}
                                                value={this.props.equipment.usage_unit}
                                                onChange={this.handleChange('usage_unit')}
                                                margin="normal"
                                            />
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Grid container spacing={24}>
                                        <Grid item xs={3}>
                                        </Grid>
                                        <Grid item xs={6}>
                                        </Grid>
                                        <Grid item xs={3} container justify="center">
                                            <Grid container spacing={24}>
                                                <Grid item xs={6} container justify="center">
                                                    <Button variant="contained" color="secondary" className={classes.button} component='a' href="/equipment">
                                                        Cancel
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={6} container justify="flex-start">
                                                    <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}>
                                                        Save
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </form>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </main>
          </div>
      </div>
    )
  }
}

EquipmentForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


//export default BoxCon
const mapStateToProps = (state) =>{
  return state;
}


const connectedEquipmentFormPage = withRouter(connect(mapStateToProps, null, null, {
  pure: false
})(withStyles(styles)(EquipmentForm)));

export { connectedEquipmentFormPage as EquipmentForm };

export default connect()(EquipmentForm);
