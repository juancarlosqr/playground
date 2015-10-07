/*global */

angular.module('githubApp.githubService', [])
  .factory('GithubService', ['$http',
    function ($http) {
      var hello = function () {
        console.log('GithubService here!');
      };
      var repos = function (repos_url) {
        return $http.get(repos_url);
      };
      var user = function (user) {
        return $http.get('https://api.github.com/users/' + user);
      };
      return {
        hello: hello,
        user: user,
        repos: repos
      };
    }]);