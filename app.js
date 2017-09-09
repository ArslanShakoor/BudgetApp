var budgetController = (function() {
   //code for calculations


})();


var UIController = (function(){
  //code for userinferce

})();


var controller = (function(budgetCtrl, UICtrl){

  //code for event handling

  var ctrlAddItem = function(){
    //read the input

    //show the input on ui

    //caluclate the budget

    //show the budget in UI
    

  }

  document.querySelector('.add__btn').addEventListener('click',ctrlAddItem)
  

  document.addEventListener('keypress', function(event){
    if(event.keyCode === 13 || event.which === 13 ){
      console.log("you hit the enter");
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
