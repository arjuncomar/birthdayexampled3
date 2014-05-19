var filter_dates = function(start_date, end_date, nodes) {
    return nodes.filter(function(node, i, arr) {
        var date = Date(node.birthday);
        return date.getTime() <= end_date.getTime() && date.getTime() >= start_date.getTime()
    });
}

var date_format = d3.time.format("%m/%d/%Y");

