import React from "react"
import { Helmet } from "react-helmet"

function Meta() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Adam Isaacks Personal Website & Digital Resume - Check it out!"
        />
        <meta name="author" content="Adam Isaacks" />
        <title>Adam Isaacks</title>
        <link rel="canonical" href="adamisaacks.com" />
      </Helmet>
    </div>
  )
}

export default Meta
