import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeNameFilter, changeTagFilter } from '../actions';
import FilterChampionForm from '../components/FilterChampionForm';

class FilterChampionFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.state = { nameFilter: '', tagFilter: '' };
  }

  handleNameChange(event) {
    const { changeNameFilter } = this.props;
    changeNameFilter(event.target.value.toLowerCase());
    this.setState({ nameFilter: event.target.value });
  }

  handleTagChange(event) {
    const { changeTagFilter } = this.props;
    changeTagFilter(event.target.value);
    this.setState({ tagFilter: event.target.value });
  }

  render() {
    const { nameFilter, tagFilter } = this.state;
    return (
      <FilterChampionForm
        nameFilter={nameFilter}
        tagFilter={tagFilter}
        handleNameChange={this.handleNameChange}
        handleTagChange={this.handleTagChange}
      />
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    changeNameFilter: name => dispatch(changeNameFilter(name)),
    changeTagFilter: tag => dispatch(changeTagFilter(tag)),
  }
);

FilterChampionFormContainer.propTypes = {
  changeNameFilter: PropTypes.func.isRequired,
  changeTagFilter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterChampionFormContainer);
