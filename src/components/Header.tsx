import * as React from 'react'
import Head from 'next/head'

interface HeaderProps extends React.Props<Element> {
  siteTitle: string,
  description: string,
  stylesheets?: any[]
}

export const Header: React.FunctionComponent = (props: HeaderProps) => {
  return (
    <Head>
      <title>{props.siteTitle}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {props.stylesheets && props.stylesheets.length > 0 && props.stylesheets.map((stylesheet, i) => {
        return <link key={i} rel="stylesheet" href={stylesheet} />
      })}
      <style>{`
          body {
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
          }
      `}</style>
    </Head>
  )
}

export default Header
