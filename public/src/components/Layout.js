import React, { Component } from 'react'
import {Route} from 'react-router-dom' 
import GraphQlComponent from './ChannelList'
import Dashboard from './Bootstrap'
import RenderProps from './RenderProps'
import Test from './Test'
import MovieDetail from './movie/MovieDetail'
import CreateMovie from './movie/CreateMovie'
export default class Layout extends Component {
  render() {
    return (
      <div className="layout">

        <Route  path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={GraphQlComponent} />
        <Route path="/render" component={RenderProps} />
        <Route path="/movieDetail" component={MovieDetail} />
        <Route path="/test" component={Test} />
        <Route path="/createMovie" component={CreateMovie} />
       
      </div>
    )
  }
}



