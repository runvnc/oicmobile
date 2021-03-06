function req(url, onload) {
  var oReq = new XMLHttpRequest();
  oReq.onload = onload;
  oReq.open("get", url, true);
  oReq.send();
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },
    createServer: function() {
      var name = document.getElementById('name').value;
      var s = 'JIY234lksOIJOkX923sA';
      var image = document.getElementById('image').value;
      var url = 'http://104.237.134.27:6001/'+s+'/'+name+'/'+image+'/jason';
      alert('Sending command to launch server url is '+url);
      req(url, function() {
        alert('responseText: ' + this.responseText);
      });
    }
};

createServer = app.createServer;

app.initialize();
