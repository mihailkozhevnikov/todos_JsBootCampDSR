import { connect } from 'react-redux';
import { userActions} from '../actions/UserActions';

  function notAutorazedLogOut()
  {
    const { dispatch } = this.props;
    dispatch(userActions.notAutorazedLogOut());
  }

  
export default notAutorazedLogOut = connect(null)(notAutorazedLogOut);