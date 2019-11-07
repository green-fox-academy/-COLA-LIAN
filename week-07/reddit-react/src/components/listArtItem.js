import '../App.css';
import React from 'react';
import {connect} from 'react-redux';
import {upVoteAction} from  '../redux/actions'
import {downVoteAction} from  '../redux/actions'


function ListArtItem({ article, upVote, downVote }){

    const handleUpVote = () => {
        let up = document.querySelector('.up');
        up.className = "uped";
        upVote(article.id);
        setTimeout(() => {up.className = "up"}, 1000);
    }

    const handleDownVote = () => {
        let down = document.querySelector('.down');

        down.className = "downed";
        downVote(article.id);
        setTimeout(() => {down.className = "down"}, 1000);
    }

    return (         
        <div className="article">

            <div className="voteArea">
                <div className="vote" id="up">
                   <div className='up' onClick={handleUpVote} ></div> 
                </div>
                <div className="score">{article.score} </div>
                <div className="vote" id="down">
                    <div className='down' onClick={handleDownVote}></div> 
                </div>
            </div>

            <div className="operateArea"> 

                
                <h3> {article.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>Author:anonymous</small></h3> 

                <small>Published Time: {article.timestamp}</small>
                {/* <strong>Published Time: {article.timestamp}</strong> */}
                <br/>
                <br/>
                <button className="listBtn">Modify</button>
                <button className="listBtn">Remove</button>
            </div>

        </div>
    );
}


const mapStateToProps = ({upItem, downItem}) => ({upItem, downItem})

const mapDispatchToProps = (dispatch) => ({
    upVote: (id) => dispatch(upVoteAction(id)),
    downVote: (id) => dispatch(downVoteAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListArtItem)