import PropTypes from 'prop-types';
import React, {Component} from 'react';
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
  Checkbox,
} from 'semantic-ui-react';
import Navbar from '../Navbar';
import '../../css/Home.css';

const HomepageHeading = ({mobile}) => (
  <Segment
    inverted
    textAlign="center"
    style={{minHeight: 700, padding: '1em 0em'}}
    vertical
    className="home-header">
    <Container text>
      <Header
        as="h4"
        content="Johann Baptista"
        inverted
        style={{
          fontSize: mobile ? '1em' : '2em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '4em' : '7em',
        }}
      />
      <Divider inverted />
      <Header
        as="h1"
        content="Fullstack developer"
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '3em',
          fontWeight: 'normal',
          marginBottom: 0,
        }}
      />
      <Divider inverted />
      <Header
        as="h1"
        content="Data scientist"
        inverted
        style={{
          fontSize: mobile ? '1.2em' : '2.2em',
          fontWeight: 'normal',
          marginBottom: 0,
        }}
      />
      <Checkbox
        label="React"
        name="checkboxRadioGroup"
        value="this"
        defaultChecked
        disabled
        style={{
          marginTop: mobile ? '2em' : '5em',
        }}
      />
      <Checkbox
        label="Node"
        name="checkboxRadioGroup"
        value="this"
        defaultChecked
        disabled
      />
      <Checkbox
        label="R"
        name="checkboxRadioGroup"
        value="this"
        defaultChecked
        disabled
      />
      <Checkbox
        label="Python"
        name="checkboxRadioGroup"
        value="this"
        defaultChecked
        disabled
      />
      {/*
    <Header
      as='h2'
      content='See what I can do for your company'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
    */}
    </Container>
  </Segment>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default HomepageHeading;
