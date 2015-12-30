﻿(function () {
    'use strict';

    var app = angular.module('app', [
        'ngAnimate',
        'ngSanitize',

        'ui.router',
        'ui.bootstrap',
        'ui.jq',

        'abp'
    ]);

    //Configuration for Angular UI routing.
    app.config([
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('dm/');
            $stateProvider
                .state('home', {
                    url: 'dm/',
                    templateUrl: '/App/Main/views/home/home.cshtml',
                    menu: 'Home' //Matches to name of 'Home' menu in CMSNavigationProvider
                })
                .state('channel', {
                    url: 'dm/channel',
                    templateUrl: '/App/Main/views/channel/channel.cshtml',
                    menu: 'Channel' //Matches to name of 'Channel' menu in CMSNavigationProvider
                })
                .state('channels', {
                    url: 'dm/channel/index',
                    templateUrl: '/App/Main/views/channel/index.cshtml',
                    menu: 'Channels' //Matches to name of 'Channel' menu in CMSNavigationProvider
                })
                .state('content', {
                    url: 'dm/content',
                    templateUrl: '/App/Main/views/content/content.cshtml',
                    menu: 'Content'
                })
                .state('template', {
                    url: 'dm/template',
                    templateUrl: '/App/Main/views/template/template.cshtml',
                    menu: 'Template'
                })
                .state('create', {
                    url: 'dm/create',
                    templateUrl: '/App/Main/views/create/create.cshtml',
                    menu: 'Create'
                });
        }
    ]);
})();