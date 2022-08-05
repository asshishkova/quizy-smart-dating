import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppBarComponent from "./AppBarComponent";
import { userLogoutAction } from "../../redux/actions/user-logout-action";
import { getProfile } from "../../redux/selectors/profile-entity-selector";
import { getTotalScore } from "../../redux/selectors/app-view-selector";

const mapStateToProps = (state) => {
  const profile = getProfile(state);
  const totalScore = getTotalScore(state);
  return { profile, totalScore };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ userLogoutAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBarComponent);
