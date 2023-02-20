import React from 'react'

type DataFetchProps = { 
    status: "loading" | "error" | "success"
};

const DataFetch = ( {status}: DataFetchProps) => {
    if(status == "loading"){
       return <h2>Data is loading....</h2>
    }
    else if(status == "error"){
       return <h2>Error. Data could not fetch</h2>
    }
  return (
    <>
    <h2>Data fetched successfully!!!!</h2>
    </>
  )
}

export default DataFetch