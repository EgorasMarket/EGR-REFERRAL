import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

const Alert = ({ alerts }) => {
  const [open, setOpen] = React.useState(false);

  console.log(alerts, 'Alert');

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      {
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map(alert => (
        //   <div className='custom-alert'>
            
        //     <div key={alert.id} className={'custom-alert-inner alert alert-' + alert.alertType + ' '}>
            
        //       <div class="MuiSnackbarContent-message">{alert.alertType === 'danger' ? (
        //         <i className="fas fa-exclamation-triangle mr-1"></i>
        //       ) : null }  {alert.msg}</div>
            
        //     </div>
        //   </div>
        <div key={alert.id} class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation6 MuiSnackbarContent-root css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root snacks" role="alert" direction="up">
            <div class="MuiSnackbarContent-message css-1exqwzz-MuiSnackbarContent-message">{alert.msg}</div>
        </div>

        ))
      }
      
    </div>

  )
}
  

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
