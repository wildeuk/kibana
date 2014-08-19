define(function (require) {
  require('modules')
  .get('app/visualize')
  .directive('visEditorSidebar', function () {
    var _ = require('lodash');

    require('apps/visualize/editor/agg_group');

    return {
      restrict: 'E',
      template: require('text!apps/new_visualize/editor/sidebar.html'),
      replace: true,
      scope: {
        vis: '=',
        savedVis: '=',
        apply: '&',
        reset: '&'
      }
    };
  });
});