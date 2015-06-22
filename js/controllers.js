'use strict';

app.controller('MyCtrl1', function ($scope, $modal, shareDataService) {

    // model
    $scope.m = {};

    // Init variables
    $scope.m.provinces = [
        {value: '',   label: 'All Provinces'},
        {value: 'AB', label: 'Alberta'},
        {value: 'BC', label: 'British columbia'},
        {value: 'MB', label: 'Manitoba'},
        {value: 'NB', label: 'New Brunswick'},
        {value: 'NL', label: 'Newfoundland and Labrador'},
        {value: 'NS', label: 'Nova Scotia'},
        {value: 'NT', label: 'Northwest Territories'},
        {value: 'NU', label: 'Nunavut'},
        {value: 'ON', label: 'Ontario'},
        {value: 'PE', label: 'Prince Edward Island'},
        {value: 'QC', label: 'Quebec'},
        {value: 'SK', label: 'Saskatchewan'},
        {value: 'YT', label: 'Yukon'}
    ];
    $scope.m.orderByName = 'last_name';
    // Dummy Contact List
    $scope.m.list = [{
        first_name: 'Julio',
        last_name:  'Johnson',
        address:    '3363 Baker Street',
        city:       'London',
        province:   'ON',
        zip:        'N0N 0N0',
        phone:      '5194300164'
    },{
        first_name: 'Patricia',
        last_name:  'Wells',
        address:    '4112 Poplar Street',
        city:       'Alberton',
        province:   'PE',
        zip:        'C0B 1B0',
        phone:      '9028531824'
    },{
        first_name: 'Steven',
        last_name:  'Shuler',
        address:    '4727 Benton Street',
        city:       'Kitchener',
        province:   'ON',
        zip:        'N2G 4L9',
        phone:      '5195730101'
    },{
        first_name: 'Helen',
        last_name:  'Rodriguez',
        address:    '61 Parkdale Avenue',
        city:       'Hamilton',
        province:   'ON',
        zip:        'L8K 1A4',
        phone:      '9055494743'
    },{
        first_name: 'Jason',
        last_name:  'Bryan',
        address:    '4938 St. John Street',
        city:       'Big River',
        province:   'SK',
        zip:        'S4P 3Y2',
        phone:      '3064694019'
    },{
        first_name: 'Rose',
        last_name:  'Russell',
        address:    '3383 Yonge Street',
        city:       'Toronto',
        province:   'ON',
        zip:        'M4W 1J7',
        phone:      '4169209135'
    },{
        first_name: 'Shani',
        last_name:  'Brown',
        address:    '2315 St. Paul Street',
        city:       'Niagara Falls',
        province:   'ON',
        zip:        'L2E 4E6',
        phone:      '9053576917'
    },{
        first_name: 'Hazel',
        last_name:  'Books',
        address:    '1483 Albert Street',
        city:       'Stratford',
        province:   'ON',
        zip:        'N5A 3K5',
        phone:      '5192739816'
    },{
        first_name: 'Kristin',
        last_name:  'Upchurch',
        address:    '1189 Bloor Street',
        city:       'Killam',
        province:   'AB',
        zip:        'T0B 2L0',
        phone:      '7803850588'
    },{
        first_name: 'Gertrud',
        last_name:  'Hanson',
        address:    '2243 Whitmore Road',
        city:       'Woodbridge, ON',
        province:   'ON',
        zip:        'L0L 0L0',
        phone:      '9052649675'
    },{
        first_name: 'Matthew',
        last_name:  'Barba',
        address:    '410 Parkdale Ave',
        city:       'Brockville, ON',
        province:   'ON',
        zip:        'K6V 4X4',
        phone:      '6133490011'
    },{
        first_name: 'Lou',
        last_name:  'Shah',
        address:    '12 Lockhart Drive',
        city:       'Barrie',
        province:   'ON',
        zip:        'L4M 3B1',
        phone:      '7057378033'
    },{
        first_name: 'Francesca',
        last_name:  'Simms',
        address:    '3405 St. John Street',
        city:       'Carlyle',
        province:   'SK',
        zip:        'S4P 3Y2',
        phone:      '3064530422'
    },{
        first_name: 'Harold',
        last_name:  'Dake',
        address:    '2498 Bay Street',
        city:       'Toronto, ON',
        province:   'ON',
        zip:        'M5J 2R8',
        phone:      '4168902845'
    }];

    $scope.m.paginator = {};
    $scope.m.paginator.totalItems = $scope.m.list.length;
    $scope.m.paginator.currentPage = 1;
    $scope.m.paginator.maxSize = 10;
    $scope.m.paginator.setPage = function (pageNo) {
        $scope.m.paginator.currentPage = pageNo;
        var start = $scope.m.paginator.currentPage*$scope.m.paginator.maxSize-$scope.m.paginator.maxSize,
            end = start +  $scope.m.paginator.maxSize;
        $scope.m.listToShow = $scope.m.list.slice(start, end);
    };
    $scope.m.listToShow = $scope.m.list.slice($scope.m.paginator.currentPage*$scope.m.paginator.maxSize-$scope.m.paginator.maxSize, $scope.m.paginator.maxSize);


    // If Contact is added update Contact List
    if(!isEmpty(shareDataService.getObj())){
        $scope.m.list.unshift(shareDataService.getObj());
    }

    // create edit popup
    $scope.editCall = function(recordIndex){
        $scope.m.editRecordIndex = recordIndex;
        $scope.m.editRecord = $scope.m.list[recordIndex];

        var editModal = $modal({
                            scope: $scope,
                            template: 'partials/modal-edit.tpl.html',
                            title: 'Edit Contact',
                            show: false});

        $scope.showModal(editModal);
    }
    // update record
    $scope.editRecord = function(editedRecord){
        $scope.m.list[$scope.m.editRecordIndex] = editedRecord;
    }

    // create delete confirmation popup
    $scope.deleteCall = function(recordIndex){

        $scope.m.deleteRecordIndex = recordIndex;

        var userName = $scope.m.list[recordIndex].first_name + ' ' + $scope.m.list[recordIndex].last_name;

        var deleteModal = $modal({
                            scope: $scope,
                            template: 'partials/modal-delete.tpl.html',
                            title: 'Delete Contact',
                            content: 'You are about to delete <strong>\'' + userName + '\'</strong>',
                            recordIndex: recordIndex,
                            show: false});

        $scope.showModal(deleteModal);
    }
    // delete record
    $scope.deleteRecord = function(recordIndex){
        $scope.m.list.splice(recordIndex, 1);
    }

    $scope.orderByName = function() {
        if($scope.m.orderByName == 'last_name'){
            $scope.m.orderByName = '-last_name';
        } else {
            $scope.m.orderByName = 'last_name';
        }
    };

    // invoke popup
    $scope.showModal = function(modal) {
        modal.$promise.then(modal.show);
    };
});




app.controller('MyCtrl2' ,function ($scope, shareDataService) {
    // model
    $scope.m = {};

    $scope.saveContact = function(){
        shareDataService.addObj($scope.m.newRecord);
    }
});


// Auxiliary checks if object is empty
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}