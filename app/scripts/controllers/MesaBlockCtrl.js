'use strict';

/**
 * @ngdoc function
 * @name vmBlocks3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vmBlocks3App
 */
 
angular.module('vmBlocks3App')
  .controller('MesaBlockCtrl', function ($scope,VmWebAPI) {
    // dummies values before we hook up to  a web service
    $scope.MesaBlock = {
      BlockName: "B-101",
      status: "off",
      dFlow: 121.23,
      dDuty: 0,
      dTemperature: 650.2,
      dPressure: 175.22,
      dEfficiency: 75,
      dBlowDown: 2.5,
      sDutyUnits: "mmBtu/Hr",
      sFlowUnits: "kLb/Hr",
      sTemperatureUnits: "F",
      sPressureUnits: "PSIG",
      sBlowDownUnits: "%",
      sEfficiencyUnits: "%",
      bFlowIfTrue: true,
      bExhaustPressureIfTrue: true,
      sDescription:"Some text about the block goes here.  can have line feeds etc" 
    }
    
      var OnComplete = function (data) {
        console.log (data)
      $scope.BlockName = data;
    };

    var OnError = function (reason) {
      $scope.error = "could not find details";
    };
    
     VmWebAPI.getBlockDetails('600-150-LD')
      .then(OnComplete, OnError);
    
  });
  
  
  // http://demo1.svmesa.com/vmwebapi/odata/VmMesaBlockProperties?$filter=BlockName eq 'General Outputs'