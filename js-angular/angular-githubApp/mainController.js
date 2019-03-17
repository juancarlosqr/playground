/*global angular*/

angular.module('githubApp.mainController', [])
  .controller('MainController', ['$scope', '$interval', '$timeout', '$log', '$anchorScroll', '$location', 'GithubService',
    function ($scope, $interval, $timeout, $log, $anchorScroll, $location, GithubService) {
      $scope.debug = false;
      $scope.model = {};

      function onRepos(response) {
        $scope.model.repos = response.data;
      }

      function onReposError(reason) {
        $log.error(reason);
        $scope.model.repo_error = 'Error fetching user repos: ' + reason.data.message;
      }

      function onUser(response) {
        $scope.model.basic = response.data;
        $location.hash('details');
        $anchorScroll();
        // Get user repos
        GithubService.repos(response.data.repos_url).then(onRepos, onReposError);
      }

      function onUserError(reason) {
        $log.error(reason);
        $scope.model.basic_error = 'Error fetching user data: ' + reason.data.message;
      }

      function search() {
        $log.info('Search', $scope.model.user);
        if ($scope.model.user) {
          GithubService.user($scope.model.user).then(onUser, onUserError);
        }
      }

      function clear() {
        $scope.model = {};
      }

      function debugging() {
        $scope.debug = !$scope.debug;
      }

      $timeout(function () {
        $log.log('Running timeout', new Date().getTime());
      }, 500);

      $interval(function () {
        $log.log('Running interval', new Date().getTime());
      }, 1000, 3);

      // Public API
      $scope.search = search;
      $scope.clear = clear;
      $scope.debugging = debugging;
      GithubService.hello();
    }]);
