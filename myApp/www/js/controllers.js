angular.module('starter.controllers', [])

  /* MyCardsCtrl */
  .controller('MyCardsCtrl', function ($scope, BonusCards, CONFIG) {
    $scope.cards = [];
    $scope.defaultLogo = CONFIG.defaultLogoUrl;

    BonusCards.getMyCards().then(function (data) {
      $scope.cards = data.data.items;
    });

    $scope.removeCard = function (card) {
      BonusCards.removeCard(card.id).then(function(){
        $scope.cards.splice($scope.cards.indexOf(card), 1);
      })
    };
  })

  /* MyCardDetailCtrl */
  .controller('MyCardDetailCtrl', function ($scope, $stateParams, BonusCards, CONFIG) {
    $scope.card = {};
    $scope.defaultLogo = CONFIG.defaultLogoUrl;

    BonusCards.getCard($stateParams.cardId).then(function (data) {
      $scope.card = data.data;
    });
  })

  /* ServicesCtrl */
  .controller('ServicesCtrl', function ($scope, Services) {
    $scope.services = [];
    Services.getServices().then(function(data){
      $scope.services = data.data.items;
    });

  })

  /* CardCreateCtrl */
  .controller('CardCreateCtrl', function ($scope, $stateParams, $cordovaBarcodeScanner) {
    $scope.scanBarcode = function() {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
        alert(imageData.text);
        console.log("Barcode Format -> " + imageData.format);
        console.log("Cancelled -> " + imageData.cancelled);
      }, function(error) {
        console.log("An error happened -> " + error);
      });
    };
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });

