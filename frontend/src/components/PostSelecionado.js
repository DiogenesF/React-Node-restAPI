import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

const PostSelecionado = ({ setValueReadOnly, onClick, user, post }) => {
  useEffect(() => {
    setValueReadOnly(true);
  }, [setValueReadOnly]);

  return (
    <Fragment>
      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => onClick(false, false)} style={{ float: "left" }}>
          Voltar
        </button>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <h3 style={{ fontSize: "25px" }}>
          {user.name} -
          <span style={{ fontSize: "20px" }} className="company">
            {" "}
            {user.company.name}
          </span>{" "}
        </h3>

        <p>Email: {user.email}</p>
        <p>Website: {user.website}</p>
      </div>
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </Fragment>
  );
};

PostSelecionado.propTypes = {};

export default PostSelecionado;
