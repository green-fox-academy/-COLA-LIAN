import '../App.css';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import ListArtItem from './listArtItem';
import {listAction} from  '../redux/actions'
// import {upVoteAction} from  '../redux/actions'

function ListItems ({lists, getList}) {
  
  useEffect(() =>{ getList()}, []);
  
  return (
    <div >
          {lists.map(item => <ListArtItem article={item} />)}
      </div>
    )
}
  
  const mapStateToProps = ({lists}) => ({lists})
  const mapDispatchToProps = (dispatch) => ({
    getList: () => dispatch(listAction())
    // upVote: () => dispatch(upVoteAction())
  })
  export default connect(mapStateToProps, mapDispatchToProps)(ListItems)