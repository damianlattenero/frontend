'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:VehicleCtrl
 * @description
 * # VehicleCtrl
 * Controller of the desappGroupABackendApp
 */

angular.module('desappGroupABackendApp')
  .controller('InboxCtrl', function($scope, MessageService, $routeParams) {
    $scope.loading = true;
    $scope.inbox = [];
    $scope.outbox = [];
  // $('.nav-tabs a').click(function (e) {
   //        e.preventDefault();
    //       $(this).tab('show');
      // });
    MessageService.getInbox().then(function(response) {
        $scope.inbox = response.data;
      },
      function(error) {
        console.log(error);
      })
      MessageService.getOutbox().then(function(response) {
                    $scope.outbox = response.data;
                        },function(error) {
                                  console.log(error);
                                });

  });
