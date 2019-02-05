import * as React from 'react'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import Tracking from './Tracking'

interface PageProps extends React.Props<React.ReactNode>{
  heroTitle: string,
  description: string,
  stylesheets?: string[],
  topLinks?: string[],
  siteId: string,
}

export const Page: React.FunctionComponent = (props: PageProps) => {
  return (
    <div>
      <Header
        siteTitle={props.siteTitle}
        description={props.description}
        stylesheets={props.stylesheets}
      />
      <main className="lh-copy">
        <Hero
          heroTitle={props.heroTitle}
          subtitle={props.description}
          topLinks={props.topLinks}
          backgroundClass={props.backgroundClass}
        />

        {props.body}

        <Footer copyright={props.copyright} />
        {props.siteId && (
          <Tracking siteId={props.siteId} />
        )}
      </main>
    </div>
  )
}

Page.defaultProps = {
  heroTitle: '',
  description: '',
  stylesheets: [
    'https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css'
  ],
  backgroundClass: 'bg-dark-gray',
}

export default Page
