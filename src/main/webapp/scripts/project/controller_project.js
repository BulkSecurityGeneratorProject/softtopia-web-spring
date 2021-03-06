'use strict';

softtopiawebApp.controller('ProjectController', function ($scope, resolvedProject, resolvedProjectGroups, Project, ProjectGroup) {

        $scope.projects = resolvedProject;
        $scope.projectGroups = resolvedProjectGroups;

        $scope.create = function () {
            Project.save($scope.project,
                function () {
                    $scope.projects = Project.query();
                    $('#saveProjectModal').modal('hide');
                    $scope.clear();
                });
        };

        $scope.update = function (id) {
            $scope.project = Project.get({id: id});
            $('#saveProjectModal').modal('show');
        };

        $scope.delete = function (id) {
            Project.delete({id: id},
                function () {
                    $scope.projects = Project.query();
                });
        };

        $scope.clear = function () {
            $scope.project = {name: null, description: null, picture: null, dateCreated: null, dateFinished: null, id: null};
        };
    });
