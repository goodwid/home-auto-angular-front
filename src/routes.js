configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$transitionsProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider, $transitionsProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: `
      <div id="intro">
        Welcome to Home Automation!<br>
      </div>
      `
    })
    .state('controls', {
      url: '/controls',
      data: {
        requiresAuth: true
      },
      component: 'controls'
    })
    .state('controls.fire', {
      url: '/fire',
      data: {
        requiresAuth: true
      },
      component: 'fireplace'
    });
  $urlRouterProvider.otherwise('/');
  $transitionsProvider.onStart({
    to: state => !!(state.data && state.data.requiresAuth)
  }, ($state) => {
    $state.$to().name;
  });
}
