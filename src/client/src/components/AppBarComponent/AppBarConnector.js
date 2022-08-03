import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppBarComponent from "./AppBarComponent";

import { getProfile } from "../../redux/selectors/profile-entity-selector";

const mapStateToProps = (state) => {
  const profile = getProfile(state);
  return { profile };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBarComponent);