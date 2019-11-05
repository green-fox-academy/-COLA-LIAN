import '../App.css';
import React from 'react';
import {connect} from 'react-redux';
import ListArtItem from './listArtItem';

const mapStateToProps = ({list}) => ({ list });

export default connect(mapStateToProps)(function({list}) {
    return (
      <div className="listitem">
      {list.map(item => <ListArtItem item={artical} />)}
      </div>
    )
})

