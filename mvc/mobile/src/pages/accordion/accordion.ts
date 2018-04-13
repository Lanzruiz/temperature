import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit {

  accordionExapanded = false;
  @ViewChild("cc") cardContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer) {

  }

  angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope) {
  $scope.groups = [];
  
  $scope.groups = [
    { name: 'Bubbles', id: 1, items: [{ subName: 'SubBubbles1', subId: '1-1' }, { subName: 'SubBubbles2', subId: '1-2' }]},
    { name: 'Group1', id: 1, items: [{ subName: 'SubGrup1', subId: '1-1' }, { subName: 'SubGrup1', subId: '1-2' }]},
    { name: 'Group1', id: 1, items: [{ subName: 'SubGrup1', subId: '1-1' }, { subName: 'SubGrup1', subId: '1-2' }]},
  ];
  
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
});

}
