bugTrackerApp.controller('bugCountController', function($scope, BugTracker) {
    $scope.bt = BugTracker;
    $scope.newBugTitle = '';
    $scope.newBugDescription = '';
    $scope.selectedBugs = [];
    // $scope.newBug = null;
    $scope.createBug = function() {
        var newBug = new Bug($scope.newBugTitle, $scope.newBugDescription, new Date());
        $scope.bt.addBug(newBug);
    }

    $scope.addToSelectedBugs= function(bug) {
        $scope.selectedBugs.push(bug);
    }

    $scope.removeBugs = function() {
        $scope.selectedBugs.forEach(function(entry) {
            $scope.bt.deleteBug(entry);
        })
    }

    $scope.closeBugs = function() {
        $scope.selectedBugs.forEach(function(entry) {
            $scope.bt.closeBug(entry);
        })
    }

    $scope.defaultBugs = function() {
        var newBug1 = new Bug('Test 1', 'Click not working', new Date());
        var newBug2 = new Bug('Test 2', 'Double Click not working', new Date());
        var newBug3 = new Bug('Test 3', 'Hover not working', new Date());
        var newBug4 = new Bug('Test 4', 'Jump not working', new Date());
        var newBug5 = new Bug('Test 5', 'Everything not working', new Date());
        $scope.bt.addBug(newBug1);
        $scope.bt.addBug(newBug2);
        $scope.bt.addBug(newBug3);
        $scope.bt.addBug(newBug4);
        $scope.bt.addBug(newBug5);
    }

    $scope.defaultBugs();
});
