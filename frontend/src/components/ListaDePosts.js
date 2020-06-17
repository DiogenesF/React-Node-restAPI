import React, { Fragment, useState } from "react";
import PostSelecionado from "./PostSelecionado";

const ListaDePosts = ({ setValueReadOnly, users, posts }) => {
  const [selectedPost, setSelectedPost] = useState(false);
  const [selectedUser, setSelectedUser] = useState(false);

  const onClick = (user, post) => {
    setSelectedUser(user);
    setSelectedPost(post);
    setValueReadOnly(false);
  };

  return (
    <div style={{ marginTop: "10px" }} className="container posts">
      {selectedPost ? (
        <PostSelecionado
          setValueReadOnly={setValueReadOnly}
          onClick={onClick}
          user={selectedUser}
          post={selectedPost}
        />
      ) : (
        <Fragment>
          {users.length > 0 && posts.length > 0 ? (
            <Fragment>
              {users.map((each_user) => (
                <Fragment key={each_user.id}>
                  {posts.map((each_post) => (
                    <Fragment key={each_post.id}>
                      {each_user.id === each_post.userId ? (
                        <div className="post-list">
                          <div className="name">
                            <h4 onClick={() => onClick(each_user, each_post)}>
                              {each_user.name} -
                              <span className="company">
                                {" "}
                                {each_user.company.name}
                              </span>{" "}
                            </h4>
                          </div>
                          <div className="comment">
                            <p>{each_post.body}</p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </Fragment>
                  ))}
                </Fragment>
              ))}
            </Fragment>
          ) : (
            <h4>Ooops.. Não há nada aqui.</h4>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default ListaDePosts;
