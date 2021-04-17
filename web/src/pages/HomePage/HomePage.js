import Auth0 from 'src/components/Auth0'
import AzureActiveDirectory from 'src/components/AzureActiveDirectory'
import Netlify from 'src/components/Netlify'
import MagicLink from 'src/components/MagicLink'
import Firebase from 'src/components/Firebase'
import Supabase from 'src/components/Supabase'
import Card from 'src/components/Card/Card'
import { Tabs, Tab, Row, Col, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const HomePage = () => {
  return (
    <div className="max-w-7xl py-5 mx-auto sm:px-6 lg:px-8">
      <h1 className="text-lg pb-5 leading-6 font-medium text-gray-900 capitalize">

        @redwoodjs/auth in action
      </h1>
      <p className="text-md pb-5">
        This page demonstrates authentication providers supported by{' '}
        <a
          className="underline"
          href="https://www.redwoodjs.com/authentication"
          targer="_blank"
        >
          RedwoodJS
        </a>
        .
      </p>

      <Tabs defaultActiveKey="Auth0" id="tabs-example">
        <Tab eventKey="Auth0" title="Auth0">
        <Card>
            <Auth0 />
          </Card>
        </Tab>
        <Tab eventKey="AzureActiveDirectory" title="AzureActiveDirectory">
          <Card>
            <AzureActiveDirectory />
          </Card>
        </Tab>
        <Tab eventKey="Netlify " title="Netlify">
          <Card>
            <Netlify />
          </Card>
        </Tab>
        <Tab eventKey="MagicLink" title="MagicLink">
          <Card>
           <MagicLink />
          </Card>
        </Tab>
        <Tab eventKey="Firebase" title="Firebase">
         <Card>
            <Firebase />
        </Card>
        </Tab>
        <Tab eventKey="Supabase" title="Supabase">
          <Card>
            <Supabase />
          </Card>
        </Tab>
      </Tabs>
    </div>
  )
}

export default HomePage
