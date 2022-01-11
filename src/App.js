import github from "./db";
import query from "./Query";
import { useEffect, useState, useCallback } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import RepoInfo from "./RepoInfo";

function App() {
  let [userName, setUserName] = useState("");
  let [repoList, setRepoList] = useState(null);

  let fetchData = useCallback(() => {
    fetch(github.baseURL, {
      method: "POST",
      headers: github.headers,
      body: JSON.stringify(query),
    })
      .then((response) => response.json())
      .then((data) => {
        let viewer = data.data.viewer;
        const repos = data.data.search.nodes;
        setUserName(viewer.name);
        setRepoList(repos);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App container">
      <Header />
      <h4>Hey {userName}</h4>
      {repoList && (
        <ul className="list-group list-group-flush">
          {repoList.map((repo) => (
            <RepoInfo key={repo.id} repo={repo} />
          ))}
        </ul>
      )}
      <Footer />
    </div>
  );
}

export default App;
