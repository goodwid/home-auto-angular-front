import template from './controls.html';
import style from './controls.scss';

export default {
  template,
  controller
};

controller.$inject = ['userService'];

function controller(userService) {
  this.style = style;
  this.logout = () => userService.logout();
}
