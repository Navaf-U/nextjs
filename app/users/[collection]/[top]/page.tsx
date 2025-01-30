import React from 'react'


function page({params}: {params: {top: string, collection: string}}) {
  return (
    <div>
      <h1>{params.top}, {params.collection}</h1>
    </div>
  )
}

export default page
