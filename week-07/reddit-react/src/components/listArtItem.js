import '../App.css';
import React from 'react';
import {connect} from 'react-redux';
import {upVoteAction} from  '../redux/actions'
import {downVoteAction} from  '../redux/actions'



// export default 

function ListArtItem({ article, upVote, downVote}){

    
    const handleUpVote = () => {
        console.log('clicked');
        upVote(article.id);
    }

    const handleDownVote = () => {
        downVote(article.id);
    }

    return (         
        <div className="article">

            <div className="voteArea">
                <div className="vote" id="up">
                   <div className='up' onClick={handleUpVote} ></div> 
                </div>
                <div className="score">{article.score}</div>
                <div className="vote" id="down">
                    <div className='down' onClick={handleDownVote}></div> 
                </div>
            </div>

            <h2> title:{article.title} </h2>
            <button className="listBtn">Modify</button>
            <button className="listBtn">Remove</button>
        </div>
    );
}


const mapStateToProps = ({upItem, downItem}) => ({upItem, downItem})

const mapDispatchToProps = (dispatch) => ({
    upVote: (id) => dispatch(upVoteAction(id)),
    downVote: (id) => dispatch(downVoteAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListArtItem)