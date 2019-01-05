const React = null;
const Component = null;
const PropTypes = null;
const connect = null;
const fetchCountriesIfNeeded = null;
const CountryListing = null;
const Loading = null;

class Countries extends Component {
  componentDidMount() {
    this.props.onMounted();
  }
  render() {
    return this.props.isLoaded ?
      <CountryListing /> :
      <Loading />;
  }
}

Countries.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  onMounted: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoaded: (state.countries.items != null &&
    !state.countries.isFetching),
});

const mapDispatchToProps = dispatch => ({
  onMounted: () => dispatch(fetchCountriesIfNeeded()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Countries);
