import React from 'react';
import { changeNameFilter } from '../actions';
import { connect } from 'react-redux';

class SearchChampionForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = { nameFilter: '' };
  }

  handleOnChange(event) {
    const { changeNameFilter } = this.props;
    changeNameFilter(event.target.value.toLowerCase());
    this.setState({ nameFilter: event.target.value });
  }

  render() {
    const { nameFilter } = this.state;
    return (
      <form>
        <input type="text" placeholder="Champion name" value={nameFilter} onChange={this.handleOnChange} />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => (
  { changeNameFilter: name => dispatch(changeNameFilter(name)) }
);

export default connect(null, mapDispatchToProps)(SearchChampionForm);