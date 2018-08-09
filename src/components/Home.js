import React from 'react';
import PropTypes from 'prop-types';

export default class Home extends React.Component {

    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };
        setTimeout(() => {
                this.setState({
                    status: this.state.status + 1
                })
            }, 3000
        );
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        });
    }

    render(){
        return (
            <div className="container">
                <p>New component</p> 
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr />
                <button onClick={() => this.onMakeOlder()} 
                    className="btn btn-primary">Make me older!
                </button> 
            </div>
          
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
};