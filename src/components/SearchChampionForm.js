import React from 'react';
import { connect } from 'react-redux';
import { changeNameFilter, changeTagFilter } from '../actions';

const CHAMPION_TAGS = ['All', 'Assassin', 'Fighter', 'Mage', 'Marksman', 'Support', 'Tank'];

class SearchChampionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.state = { nameFilter: '' };
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
      <form>
        <input type="text" placeholder="Champion name" value={nameFilter} onChange={this.handleNameChange} />
        <select value={tagFilter} onChange={this.handleTagChange}>
          {CHAMPION_TAGS.map(
            tag => <option key={tag}>{tag}</option>,
          )}
        </select>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => (
  { 
    changeNameFilter: name => dispatch(changeNameFilter(name)),
    changeTagFilter: tag => dispatch(changeTagFilter(tag)),
  }
);

export default connect(null, mapDispatchToProps)(SearchChampionForm);
