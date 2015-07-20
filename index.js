// Takes an ISO time and returns a string representing how
// long ago the date represents.
function prettyDate(time,date1){

    var date = new Date((time.split('.')[0] || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
        diff = (((new Date()).getTime() - date.getTime()) / 1000),
        day_diff = Math.floor(diff / 86400);

    return day_diff == 0 && (
    diff < 60 && "just now" ||
    diff < 120 && "1 minute ago" ||
    diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
    diff < 7200 && "1 hour ago" ||
    diff < 172800 && Math.floor( diff / 3600 ) + " hours ago") ||
    day_diff == 2 && "Yesterday" ||
    day_diff < 7 && day_diff + " days ago" ||
    day_diff < 31 && Math.floor( day_diff / 7 ) + " weeks ago" ||
    day_diff < 62 && Math.floor( day_diff / 31 ) + " month ago" ||
    day_diff >= 62 && Math.floor( day_diff / 31 ) + " months ago";
}
