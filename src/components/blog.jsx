import React, { Component } from "react";
import Header from "./header";
import BlogPost from "./blog-post";
import Modal from "react-modal";
import "../styles/blog.scss";
import { CMS_KEY, SPACE_ID } from "../API/API_KEY";
const contentful = require("contentful");

const modalStyle = {
  content: {
    width: "50vw",
    height: "70vh",
    top: "8vw",
    left: "50%",
    marginLeft: "-25vw",
    padding: 0,
    border: "none",
    boxShadow:
      "0 0.6px 1.9px rgba(0, 0, 0, 0.018),\n" +
      "        0 1.5px 4.3px rgba(0, 0, 0, 0.026), 0 2.6px 7.7px rgba(0, 0, 0, 0.032),\n" +
      "        0 4.3px 12.8px rgba(0, 0, 0, 0.038), 0 7.1px 21.2px rgba(0, 0, 0, 0.044),\n" +
      "        0 12.5px 37px rgba(0, 0, 0, 0.052), 0 27px 80px rgba(0, 0, 0, 0.07)",
  },
};

class Blog extends Component {
  state = {
    blogPost: undefined,
    blogCopy: null,
    modalOpened: false,
    title: undefined,
    image: undefined,
    content: undefined,
    author: undefined,
    searchInput: "",
  };
  async componentDidMount() {
    const client = contentful.createClient({
      space: SPACE_ID,
      environment: "master",
      accessToken: CMS_KEY,
    });

    await client
      .getEntries()
      .then((post) =>
        this.setState({ blogPost: post.items, blogCopy: post.items })
      )
      .catch((err) => alert(err));
  }
  handleModal = (e) => {
    this.setState({
      modalOpened: !this.state.modalOpened,
      title: [e.currentTarget.children[1].children[0].innerHTML],
      image: [e.currentTarget.children[0].children[0].getAttribute("src")],
      content: [e.currentTarget.children[1].children[1].innerHTML],
      author: [e.currentTarget.children[1].children[2].children[0].innerHTML],
    });
  };
  handleInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };
  handleSearch = (e) => {
    this.handleInput(e);
    if (e.target.value === "") {
      const filtered = this.state.blogPost.filter(({ fields }) => {
        return fields.title.toLowerCase() !== "";
      });
      this.setState({ blogPost: this.state.blogCopy });
    } else {
      const filtered = this.state.blogPost.filter(({ fields }) => {
        return (
          fields.title.toLowerCase().indexOf(this.state.searchInput) !== -1
        );
      });
      this.setState({ blogPost: filtered });
    }
  };

  render() {
    return (
      <>
        <Header />
        <main className="blog">
          <section className="blog__header">
            <h1 className="blog__header__head">Our blog</h1>
            <input
              className="blog__header__input"
              type="text"
              placeholder="Search..."
              value={this.state.searchInput}
              onChange={(e) => this.handleSearch(e)}
            />
          </section>
          <section className="blog__posts">
            {this.state.blogPost !== undefined ? (
              this.state.blogPost.map((post) => {
                return (
                  <>
                    <BlogPost
                      title={post.fields.title}
                      content={post.fields.content}
                      image={post.fields.postImage.fields.file.url}
                      author={post.fields.author}
                      dateOfPost={post.fields.dateofpost}
                      handleModal={this.handleModal}
                    ></BlogPost>
                    <Modal
                      id="reactModal"
                      contentLabel="MY MODAL"
                      style={modalStyle}
                      isOpen={this.state.modalOpened}
                    >
                      <main className="modal">
                        <section className="modal__image">
                          <img src={this.state.image} alt="post" />
                        </section>
                        <section className="modal-content">
                          <button
                            onClick={() =>
                              this.setState({ modalOpened: false })
                            }
                            className="gobackBtn"
                          >
                            Go back
                          </button>
                          <h1 className="title">{this.state.title}</h1>
                          <p className="content">{this.state.content}</p>
                          <p className="author">{this.state.author}</p>
                        </section>
                      </main>
                    </Modal>
                  </>
                );
              })
            ) : (
              <section className="blog__posts__empty">
                <h1>Right now we don't have any blog posts</h1>
              </section>
            )}
          </section>
        </main>
      </>
    );
  }
}

export default Blog;
