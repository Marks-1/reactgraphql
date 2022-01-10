const RepoInfo = ( {repo} ) => {
    return(
        <li className="list-group-item" key={repo.id.toString()}>
              <a href={repo.url} className=" h5 mb-0 text-decoration-none">
                {repo.name}
              </a>
              <p className="small">{repo.description}</p>
        </li>
    )
}
export default RepoInfo