import '../App.css';
import React from 'react';
import {connect} from 'react-redux';
import {submitAction} from  '../redux/actions'


function Submit(props) {
const {history,submit} = props;

const handleSubmit = () => {

    let title = document.getElementById("title").value;
    let url = document.getElementById("url").value;
    if(title&url){
        submit(title, url);
        history.push('/');
    }else{
        alert('please input the new item.');
    }

    // props.history.goBack();
    
}


    return (
        <div className="submitBar">       
            <div className="submitHeader">Submit A New Article</div>

            <div className="submitFrame" >
                <label>Title
                    <p><input id="title"/></p> 
                </label>

                <label>URL
                    <p><input id="url"/></p> 
                </label> 
                <button className="submitBtn" id="smallSmitBtn" onClick={handleSubmit} >submit</button>
            </div>

        </div>
    )
}

const mapStateToProps = ({lists}) => ({lists})

const mapDispatchToProps = (dispatch) => ({
    submit: (title, url) => dispatch(submitAction(title, url))
})

export default connect(mapStateToProps, mapDispatchToProps)(Submit)

