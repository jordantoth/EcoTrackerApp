window.HomeView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
    this.handleClientLoad();
    return this;
  },

  // Use a button to handle authentication the first time.
  handleClientLoad: function() {
    gapi.client.setApiKey(this.model.get("apiKey"));
    window.setTimeout($.proxy(this.checkAuth, this), 1);
  },

  checkAuth: function() {
    gapi.auth.authorize({
      client_id: this.model.get("clientId"),
      scope: this.model.get("scopes"),
      immediate: true
    }, $.proxy(this.handleAuthResult, this));
  },

  handleAuthResult: function(authResult) {
    var authorizeButton = document.getElementById('authorize-button');
    if (authResult && !authResult.error) {
      authorizeButton.style.visibility = 'hidden';
      this.makeApiCall();
    } else {
      authorizeButton.style.visibility = '';
      authorizeButton.onclick = $.proxy(this.handleAuthClick, this);
    }
  },

  handleAuthClick: function(event) {
    gapi.auth.authorize({
      client_id: this.model.get("clientId"),
      scope: this.model.get("scopes"),
      immediate: false
    }, $.proxy(this.handleAuthResult, this));
    return false;
  },

  // Load the API and make an API call.  Display the results on the screen.
  makeApiCall: function() {
    gapi.client.load('plus', 'v1', function() {
      var request = gapi.client.plus.people.get({
        'userId': 'me'
      });
      request.execute(function(resp) {
        var heading = document.createElement('h4');
        var image = document.createElement('img');
        image.src = resp.image.url;
        heading.appendChild(image);
        heading.appendChild(document.createTextNode(resp.displayName));
        document.getElementById('content').appendChild(heading);
      });
    });
  }

})
