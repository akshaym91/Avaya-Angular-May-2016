function Bug(title, description, date) {
    this.title = title;
    this.description = description;
    this.created = date;
    this.closed = false;
}

Bug.prototype.changeState = function() {
    this.closed = !this.closed;
};
