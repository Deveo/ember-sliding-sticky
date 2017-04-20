import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location : config.locationType,
  rootURL  : config.rootURL
})

Router.map(function () {
  this.route('container-animation')
  this.route('window')
  this.route('window-animation')
})

export default Router
