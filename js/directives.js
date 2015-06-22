"use strict";

app.directive('editcontrol', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, ngModel) {

            element.on('mouseenter', function(e) {
                $(element).find(".edit-box").css("opacity", "1");
            });
            element.on("mouseleave", function (e) {
                $(element).find(".edit-box").css("opacity", ".2");
            });
            /*
            element.on("click", function (e) {

            });
            */
        }
    };
});


app.directive('pagination', function ($compile) {
    return {
        restrict: 'E',
        link: function (scope, element, attrs, ngModel) {
            var el = angular.element('<ul class="paginator" />');
            /* TODO
                read data from attributes
                set proper class names
            */
            var numberOfPages = Math.ceil(scope.m.paginator.totalItems / scope.m.paginator.maxSize);

            for (var i = 0; i < numberOfPages; i++) {
                el.append('<li><button class="btn btn-default btn-sm" ng-click="m.paginator.setPage(' + (i+1) + ')">' + (i+1) + '</button></li>');
            }

            $compile(el)(scope);
            element.append(el);
        }
    };
});