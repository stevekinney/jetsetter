import { connect } from 'react-redux';
import CountDown from '../components/CountDown';

const mapStateToProps = ({ countdown }) => ({ timeLeft: countdown });

export default connect(mapStateToProps)(CountDown);
