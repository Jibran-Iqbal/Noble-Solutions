import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';



const SearchBar = () => {
  const navigate = useNavigate()
  const { names } = useSelector((state) => state.products)
  const [search, setSearch] = useState("");
  // useEffect(() => {
  // }, [])

  let arr = [names[0]]
  let i, j, k;

  for (i = 0; i < names.length; i++) {
    k = 0
    for (j = 0; j < arr.length; j++) {
      if (names[i].productName === arr[j].productName)
        k = 1
    }
    if (k === 0)
      arr.push(names[i])
  }
  // console.log({names})
  // console.log({arr})

  // let namesU = new Map()
  // console.log(names)
  // useEffect(()=>{
  //   console.log("hello")
  //   for(i=0;i<names.length;i++)
  //     namesU.set(names[i].productName,i)
  // },[names])
  // console.log(namesU)
  const searchProduct = () => {
    if(search.trim())
    {
        // console.log(search)
        navigate(`/products/search?searchQuery=${search || 'none'}`)
        // We use history.push to push the website into that url 
    }
    else {
        navigate('/')
    }
  }
  const handleKeyPress = (e)=>{
    // console.log(e)
    if(e.charCode === 13)
    {
      // console.log("Hello")
        searchProduct()
    }
}

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Link to="#">
          <SearchIcon style={{
            position: 'absolute',
            left: '235px',
            top: '7px',
            fontSize: '26px',
            zIndex: '1'
          }} />
        </Link>
        &nbsp;
        <TextField sx={{
          height: 0,
          width: 260
        }} 
          id="search" 
          name="search" 
          label="Search" 
          variant="outlined" 
          size="small" 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>

    </>
  );
}

export default SearchBar