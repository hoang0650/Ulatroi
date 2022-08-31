// import Search from "@/components/Search";
import { useRouter } from "next/router";
import Axios from 'axios'
import React, { useEffect, useState, useRef } from "react";

const Search = (req,res)=>
{
    // const publisher = req.data.publisher;
    // const result = req.query.q ?
    // publisher.filter(res=>res.username.toLowerCase().includes(req.query.q)):[]
    // res.statusCode=200
    // res.end()
    const [User, setUser] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const dataBody = new FormData();
          dataBody.append('server_key', '83f0fa958d10392fd10bc8bb377a044c');
        //   dataBody.append('fetch', 'user_data');
        //   dataBody.append('user_id', id);
        
          const response = await Axios.post(
            'https://ulatroi.net/api/search&access_token=848dcbdc3953ec076f7ad68515388e6572aa2c80020ea9ce56c762037fe8e11eba98958b38768046a883bbca3f8bc8814ff676cb0e91829a',
            dataBody
          );
          const data = response?.data?.user_data;
          setUser(data);
        };
        fetchData();
      }, []);
}

export default Search;