function sendRequest() {
    var form = $('form'),
        length = form.serializeArray().length,
        element = null,
        message = "";

    for (var i = 0; i < length; i++) {
        element = form.serializeArray()[i];
        message += element.value + ' '
    }
    $("#messageAlert").show();
    $.getJSON('https://www.notifymyandroid.com/publicapi/notify?apikey=a8a667d2da1bbf10a9e146eb1e411bc5ec98479c40aa734f&application=Portfolio%20Notification&event=New%20Message&description=' + message + '&callback=?');
}