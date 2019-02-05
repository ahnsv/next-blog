import * as React from 'react'

interface FooterProps extends React.Props<Element> {
  copyright: string
}

export const Footer: React.FunctionComponent = (props: FooterProps) => {
  const now = new Date()
  return (
    <footer className="center w5 f6 tc mt4">
      <p>
        <span>&copy; </span>
        <span>{now.getFullYear()} </span>
        <span>{props.copyright}</span>
      </p>
    </footer>
  )
}

export default Footer