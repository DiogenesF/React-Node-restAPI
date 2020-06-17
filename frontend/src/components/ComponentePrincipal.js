import React, { useEffect, useState } from "react";

import ListaDePosts from "./ListaDePosts";
import axios from "axios";

const ComponentePrincipal = (props) => {
  const [users, setUsers] = useState();
  const [posts, setPosts] = useState();
  const [allFilter, setAllFilter] = useState();
  const [findUsers, setFindUsers] = useState("");
  const [findCompany, setFindCompany] = useState("");
  const [readonly, setReadOnly] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const req_users = await axios.get("http://localhost:5000/users");
      const req_posts = await axios.get("http://localhost:5000/posts");

      setUsers(req_users.data);
      setAllFilter(req_users.data);
      setPosts(req_posts.data);
    };

    fetchData();
  }, []);

  const setValueReadOnly = (value) => {
    setReadOnly(value);
  };

  const onChange = (e) => {
    var final_filter = null;
    if (e.target.name === "users") {
      setFindUsers(e.target.value);
      const filter_1 = users.filter((each_user) =>
        each_user.name.toLowerCase().includes(e.target.value)
      );
      final_filter = filter_1.filter((each_filtered) =>
        each_filtered.company.name.toLowerCase().includes(findCompany)
      );
    }

    if (e.target.name === "company") {
      setFindCompany(e.target.value);
      const filter_1 = users.filter((each_user) =>
        each_user.company.name.toLowerCase().includes(e.target.value)
      );
      final_filter = filter_1.filter((each_filtered) =>
        each_filtered.name.toLowerCase().includes(findUsers)
      );
    }

    setAllFilter(final_filter);
  };

  return (
    <div style={{ paddingBottom: "0px" }} className="container">
      <h4 className="large">Lista de posts</h4>
      <div className="flex">
        <input
          name="users"
          value={findUsers}
          onChange={(e) => onChange(e)}
          placeholder="Filtrar por usuario"
          readOnly={readonly}
        />
        <input
          name="company"
          value={findCompany}
          onChange={(e) => onChange(e)}
          placeholder="Filtrar por empresa"
          readOnly={readonly}
        />
      </div>
      {users && posts ? (
        <ListaDePosts
          setValueReadOnly={setValueReadOnly}
          users={allFilter}
          posts={posts}
        />
      ) : (
        <h4>Carregando...</h4>
      )}
    </div>
  );
};

export default ComponentePrincipal;
