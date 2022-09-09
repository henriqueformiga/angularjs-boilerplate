angular.module('landingPageModule') 
.component('home', {
    templateUrl: 'app/landing-page/home/home.template.html',
    controller: ['$routeParams', function HomeController($routeParams) {
        this.name = 'home controller here';
    }]
});