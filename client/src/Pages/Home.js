import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
  const [listPosts, setListPosts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setListPosts(response.data)
        })
    }, [])
    return ( <div className = 'App' > {
            listPosts.map((value, key) => {
                return <div > { value.title } </div>
            })
        }

        </div>);
}

export default Home