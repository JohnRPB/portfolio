import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Checkbox
} from 'semantic-ui-react'
import '../../index.css';
import cumDev from '../../quantile-plot2.jpg';
import ThreeImageDisplay from '../ThreeImageDisplay';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
/* Heads up!
 * Neither Semantic UI, nor Semantic UI React don't offer a responsive navbar, hover it can be easily implemented.
 * It can be more complicated, but you can create really flexible markup.
 */

const HomepageLayout = () => (
  <Container>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>Front end design</Header>
            <p style={{ fontSize: '1.33em' }}>
              Whether constructing aesthetic templates with HTML5 and CSS3, or putting together a fully featured application with React + Redux, my skills can advance your team's mission and goals
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>Back end development</Header>
            <p style={{ fontSize: '1.33em' }}>
              Need to spin up a server with Express? How about design a RESTful API? My approach to website engineering emphasizes the core concepts with a keen sensitivity for best practices
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>Data science and statistics</Header>
            <p style={{ fontSize: '1.33em' }}>
              I'm not a data science heavyweight, but with skills in R and Python, a minor in math, and courses in advanced statistics, I can model trends and extract information to build insightful applications
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <ThreeImageDisplay />
          </Grid.Column>
        </Grid.Row>
          {/*
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
          */}
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>"Resourceful and driven"</Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/assets/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>"Passionate and knowledgeable about science"</Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/assets/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>Check out my portfolio</Header>
        <p style={{ fontSize: '1.33em' }}>
          Here you'll find varied creations and personal projects, ranging from an effort to
        fast-track scientific reviews to e-commerce applications and machine learning
        models.
        </p>
        <Button as='a' size='large'>See it!</Button>
        <Divider />
        <Header as='h3' style={{ fontSize: '2em' }}>Follow my writings on Medium and CoderBastion</Header>
        <p style={{ fontSize: '1.33em' }}>
          For a more personal touch, this is where I blog about topics that interest me in
        computer science, web development, and data science. Some of my articles are also featured
        on CoderBastion, a platform for sharing resources between web developers.
        </p>
        <Button as='a' size='large'>Read more</Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Top</a>
        </Divider>
      </Container>
    </Segment>
  </Container>
)
export default HomepageLayout
