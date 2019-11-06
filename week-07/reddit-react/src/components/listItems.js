import '../App.css';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import ListArtItem from './listArtItem';
import {listAction} from  '../redux/actions'

const mapStateToProps = ({lists}) => ({lists})
const mapDispatchToProps = (dispatch) => ({getList: () => dispatch(listAction())})

export default connect(mapStateToProps, mapDispatchToProps)(function({lists, getList}) {

  useEffect(() => getList(), []);

    return (
      <div >
          {lists.map(item => <ListArtItem artical={item} />)}
      </div>
    )
})
 
