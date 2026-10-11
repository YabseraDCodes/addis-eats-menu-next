'use client'

import React from 'react'

function error({error}: {error: Error}) {
  return (
    <div>
      <h1>We have faced an error</h1>
      <p>{error.message}</p>
    </div>
  )
}

export default error
