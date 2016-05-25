bugTrackerApp.factory('BugTracker', function BugTracker(appDefaults) {
    // var closedBugs = 0;
    var staticIndexGenerator = 0;
    return {
        bugs: [],
        closedBugs: 0,
        addBug: function(newBug) {
            newBug.name = newBug.name || appDefaults.name;
            newBug.description = newBug.description || appDefaults.description;
            newBug.id = staticIndexGenerator++;
            this.bugs.push(newBug);
        },
        deleteBug: function(bug) {
            var removalIndex = this.bugs.indexOf(bug);
            if (removalIndex > -1) {
                this.bugs.splice(removalIndex, 1);
            }
            this.closedBugs--;
        },
        closeBug: function(bug) {
            var closureIndex = this.bugs.indexOf(bug);
            if (closureIndex > -1) {
                this.bugs[closureIndex].closed = true;
                this.closedBugs++;
            }
        }
    }
});
