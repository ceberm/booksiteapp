import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import AddBooks from './book';
import BookList from './bookList';
import Success from "./successPage"

class Header extends Component{

    state = {
        title: "My Title",
        keywords: "",
        count: 0
    }

    hello = () => {
        console.log("I was clicked")
    }

    inputChange = e => {
        console.log(e);
        this.setState({keywords: e.target.value});
    }
    buttonChange () {
        console.log(this.state.count);
        this.setState((state, props) => ({
            count: state.count+1
        }));
    }
    
    render(){
        
        return (
            <Router>
                <div>
                    <div className="row">
                        <div className="col">
                                <h1 className="display-1">Welcome!!</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                                <h3>This is my book app</h3>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="btn btn-info" type=" button" variant="outline-primary" href="/addBooks">Add Book</a >
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="/"> <span className="sr-only">(current)</span></a>
                            <a className="btn btn-light" href="/">Home</a>
                            <a className="nav-item nav-link active" href="/"> <span className="sr-only">(current)</span></a>
                            <a className="btn btn-dark" href="/">Add Users</a>
                            <a className="nav-item nav-link active" href="/"> <span className="sr-only">(current)</span></a>
                            <a className="btn btn-dark" href="/">User List</a>
                        </div>
                        </div>
                    </nav>
                    <Route path="/addBooks" component={AddBooks}></Route>
                    <Route exact path="/" component={BookList}></Route>
                    <Route exact path="/successPage" component={Success}></Route>
                </div>
            </Router>
        );
    }
}

export default Header