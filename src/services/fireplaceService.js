fireplaceService.$inject = ['$http', 'apiUrl'];

export default function fireplaceService ($http, apiUrl) {
  return {
    on() {
      return $http
        .get(`${apiUrl}/fireplace/on`)
        .then(r => r.data);
    },
    off() {
      return $http
        .get(`${apiUrl}/fireplace/off`)
        .then(r => r.data);
    },
    status() {
      return $http
        .get(`${apiUrl}/fireplace/status`)
        .then(r => r.data);
    },
    timer(timeout) {
      return $http
      .post(`${apiUrl}/fireplace/timer`, timeout)
      .then(r => r.data);
    }
  };
}
