import { SearchIcon, XIcon } from "@heroicons/react/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import Axios from 'axios'
const Search = (props) => {
  const { value, handleChange, handleSubmit, handleClear, publisher } = props;
  const [searchKey, setSearchKey] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [User, setUser] = useState([]);
  const toggleIsLoading = () => {
    // 👇️ passed function to setState
    setIsLoading(current => !current);
  };

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
      const data = response?.data.users;
      setUser(data);
    };
    fetchData();
  }, []);


  function filterBySearch() {
    const temp = User?.filter(user => user.username.includes(searchKey.toLowerCase()))
    setUser(temp);

    {/* {User?.filter(user => user.username.includes("u")).map((item) => (
          <div key={item.user_id} className="flex justify-center">
                <h1>{item.username}</h1>
          </div>
    ))} */}

}
//   const { search } = search;
//   search = useState("true");
  return (
    <>
      <div className="flex w-full mt-1 max-w-md rounded-full border-gray-200 border-[1px] px-5 py-3 items-center transition-shadow sm:max-w-xl lg:max-w-2xl focus-within:shadow-lg hover:shadow-lg">
      <SearchIcon className="h-5 text-gray-500" />
      <input
        value={value}
        onChange={handleChange}
        type="search"
        className="px-3 flex-grow focus:outline-none rounded-full"
      />
    </div>
    </>
   
  );
}

export default Search;


 {/* {User?.filter(user => user.username.includes(searchKey)).map(
            (data,err)=>{
              if(data){
                <ul className='bg-white border border-gray-100 w-full mt-2'> 
                          <li className='pl-10 pr-2 py-1 border-b-2 border-gray-100 cursor-pointer hover:bg-yellow-50 hover:text-gray-900'>
                            {data?.username}
                          </li>
                          <li className='pl-10 pr-2 py-1 border-b-2 border-gray-100 cursor-pointer hover:bg-yellow-50 hover:text-gray-900'>
                            {data?.username}
                          </li>
                          <li className='pl-10 pr-2 py-1 border-b-2 border-gray-100 cursor-pointer hover:bg-yellow-50 hover:text-gray-900'>
                            {data?.username}
                          </li>
                          <li className='pl-10 pr-2 py-1 border-b-2 border-gray-100 cursor-pointer hover:bg-yellow-50 hover:text-gray-900'>
                            {data?.username}
                          </li>
                          <li className='pl-10 pr-2 py-1 border-b-2 border-gray-100 cursor-pointer hover:bg-yellow-50 hover:text-gray-900'>
                            {data?.username}
                          </li>
                  </ul>

              }else{
                <ul className='bg-white border border-gray-100 w-full mt-2'> 
                        <li className='pl-10 pr-2 py-1 border-b-2 border-gray-100 cursor-pointer hover:bg-yellow-50 hover:text-gray-900'>
                            Không có dữ liệu hiển thị
                        </li>
                </ul>
              }
            }
          )} */}
