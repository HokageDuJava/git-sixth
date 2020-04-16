import React from "react";
import axios from "axios";
class About extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((posts) => {
      this.setState({
        posts: posts.data.slice(1, 10),
      });
    });
  }

  render() {
    const { posts } = this.state;
    const postsList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="card" key={post.id}>
            <h1 className="card-title">{post.title}</h1>
            <p className="card-content">{post.body}</p>
          </div>
        );
      })
    ) : (
      <div className="card">
        <p className="card-content">There is no post</p>
      </div>
    );

    return (
      <div className="container">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          tempore hic vero quaerat possimus placeat et quibusdam ad magnam
          illum, optio molestias nam, molestiae nemo provident nisi eius!
          Veritatis, consequuntur?
        </p>
        {postsList}
      </div>
    );
  }
}

export default About;
