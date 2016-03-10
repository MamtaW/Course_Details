
Items = new Mongo.Collection('itemList');
if (Meteor.isClient) {
Template.itemList.helpers({
    'items': function(){
        return Items.find();
    }
});


  

  Template.addItem.events({
  'submit form': function(e, b){
    var newItem = {
      Course_Name: $('#Course_Name').val(),
      Branch: $('#Branch').val(),
      collname: $('#collname').val(),
      Passing_Year: $('#Passing_Year').val(),
      Percentile_ScoreGrade: $('#grade').val(),
      
    };

    Items.insert(newItem);
 
    $('#addItemForm').find('input:text').val('');
    $('#itemStore').focus();
    return false;
  }
});

Template.item.events({
  'click .deleteItem': function(){
    Items.remove(this._id);
  }
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
