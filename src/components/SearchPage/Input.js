import React, { useContext } from 'react';
import ReposContext from '../../context/ReposContext';
import '../ReposPage/repos.css'

function Input() {
  const { setUserFind } = useContext(ReposContext);

  return(
    <input
      className="input center is-primary is-medium mb-3 has-text-centered"
      type="text"
      placeholder="You User Name"
      onChange={({ target }) => setUserFind(target.value)}
  />
  )
}

export default Input;
