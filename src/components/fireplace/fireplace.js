import template from './fireplace.html';
import style from './fireplace.scss';

export default {
  template,
  controllerAs: 'fp',
  controller
};

controller.$inject = ['fireplaceService'];

function controller(fpService) {
  this.style = style;
  this.timeout = 25;
  this.on = () => {
    fpService.on()
      .then(status => {
        this.statusDisplay = status.message;
      })
      .catch(err => console.error(err));
  };
  this.off = () => {
    fpService.off()
      .then(status => {
        this.statusDisplay = status.message;
      })
      .catch(err => console.error(err));
  };
  this.status = () => {
    fpService.status()
      .then(status => {
        this.statusDisplay = status.message + '\n' + status.timeout;
      })
      .catch(err => console.error(err));
  };
  this.timer = () => {
    let data = {
      timeout: this.timeout
    };
    fpService.timer(data)
      .then(status => {
        this.statusDisplay = status.message;
      })
      .catch(err => console.error(err));
  };
}
