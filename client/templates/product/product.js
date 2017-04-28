Template.shop.rendered = function() {
  console.log("rendered");
  console.log(Meteor.user().emails.length === 0);
	if (Meteor.user().emails.length === 0) {
    console.log("if true");
		window.setTimeout(function(){
         console.log("timer");
	  		Modal.show('popup');
		}, 15000);
	}
};

Template.popup.events({
	'click #signUpPopup': function() {
		Router.go('sell');
		Modal.hide('popup');
	}
});
