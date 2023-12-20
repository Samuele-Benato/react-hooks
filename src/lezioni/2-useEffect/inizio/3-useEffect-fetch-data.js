import React, {useState, useEffect} from "react";
import axios from 'axios';
const url = "https://api.github.com/users";

const FetchComponent = () => {
  const [users , setUsers] = useState([])

  const getData = async () => {
    const response = await axios.get(url) 
    setUsers(response.data)
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <h1>Fetch Component</h1>
      <ul className="users">
        {
          users.map((el) => {
          const {login, id, avatar_url: img, html_url} = el
            return (
              <li key={id} className="shadow bg-black text-white rounded-3">
                <img src={img} alt={login}/>
                <h5>
                  {login}
                </h5>
                <a className="ms-auto" href={html_url}>
                  Profile
                </a>
              </li>
            )
          })
        }
      </ul>
    </>
  );
};

export default FetchComponent;
