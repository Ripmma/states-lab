import React from 'react';
import OneComment from './one-comment';

class Comments extends React.Component {

constructor(){
  super();
  this.state={
    newComments: ['working?'],
    input: ''
  }
  this.handleInput = this.handleInput.bind(this)
  this.handleClick = this.handleClick.bind(this)
}

handleClick(e){
  e.preventDefault();
  console.log("I just clicked this thing")

  this.setState({
    newComments: this.state.newComments.concat([this.state.input]),
    input: ''
  })
}

handleInput(e){
  this.setState({
    input:e.target.value
  })
}

componentDidUpdate(){

  if(this.state.input !== ""){
    console.log('componentDidUpdate log -' + this.state.input)
  }
}


  render() {
    const comments = this.props.comments.map( (item, index) => <OneComment key={index} comment={item}/>)
    const newComments = this.state.newComments.map( (item, index) => <OneComment key={index} newcomment={item}/>)

    return (
      <div>


        <form>
          <input placeholder="enter comment" onChange={this.handleInput} value={this.state.input}/>
          <button onClick={this.handleClick} > Add Comment </button>
        </form>
        <div className="wrap">
          {newComments}
          </div>
        <div className="wrap">
          {comments}
          </div>
          
      </div>
    );
  }
}

export default Comments;