import angular from 'angular';
import router from 'angular-ui-router';
import components from './components';
import services from './services';
import ngDialog from 'ng-dialog';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMessages from 'angular-messages';
import 'angular-material/angular-material.css';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';
import 'angular-ui-router/release/stateEvents';


const app = angular.module('homeAuto', [
  router,
  angular.module('ui.router.state.events').name,
  ngDialog,
  ngMaterial,
  ngAria,
  ngAnimate,
  ngMessages,
  components,
  services]);

export default app;
