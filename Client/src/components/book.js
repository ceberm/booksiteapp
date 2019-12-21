import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Success from "./successPage"

class AddBooks extends Component {
    constructor(props){
        super(props);
        this.state={
          name : '',
          author : '',
          img_url: '',
          publish_date: '',
          description: '',
          isLoaded : true,
          responseToPost: '',
          book: {}
        };
    }

    handleSubmit = async e => {
        e.preventDefault();
        console.log(JSON.stringify({ 
            name: this.state.name,
            author: this.state.author,
            img_url: this.state.img_url,
            publish_date: this.state.publish_date,
            description: this.state.description
         }))
        const response = await fetch('/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            name: this.state.name,
            author: this.state.author,
            img_url: this.state.img_url,
            publish_date: this.state.publish_date,
            description: this.state.description
         }),
        });
        
        const body = await response.text();
        console.log(body)
        this.setState({ responseToPost: body });
        window.open("/successPage","_target")
    };

    render() {
        return (
                
        <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                            <br />
                            <h5><strong>Post Books to Server</strong></h5><br /><br />
                                <label><strong>Name of the Book</strong></label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    value={this.state.book.name}
                                    onChange={e => this.setState({ name: e.target.value })}
                                />
                                <label><strong>Name of the Author</strong></label>
                                <input
                                    type="text"
                                    id="author"
                                    className="form-control"
                                    value={this.state.book.author}
                                    onChange={e => this.setState({ author: e.target.value })}
                                />
                                <label><strong>URL of the Image</strong></label>
                                <input
                                    type="text"
                                    id="img_url"
                                    className="form-control"
                                    value={this.state.book.img_url}
                                    onChange={e => this.setState({ img_url: e.target.value })}
                                />
                                <label><strong>Publish Date</strong></label>
                                <input
                                    type="text"
                                    id="publish_date"
                                    className="form-control"
                                    value={this.state.book.publish_date}
                                    onChange={e => this.setState({ publish_date: e.target.value })}
                                />
                        
                            <label><strong>Brief Description</strong></label>
                                <textarea
                                    type="text"
                                    id="description"
                                    className="form-control"
                                    value={this.state.book.description}
                                    onChange={e => this.setState({ description: e.target.value })}
                                />
                                <button className="btn btn-primary" renderas="button" type="submit">Submit</button>
                          
                    </div>
        </form>
        )
    }
}

export default AddBooks