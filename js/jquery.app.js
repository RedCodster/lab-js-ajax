// Your solution here
$(document).ready(function () {


var $donuts = $('#doughnuts');


// GET request
  $.ajax({
      url: 'http://api.doughnuts.ga/doughnuts',
      method: "GET",
      success: function (response, status) {
        console.log(response);
        for (i=0; i<response.length; i++) {
          var newLi = '<li data-id='+response[i].id+'>'+response[i].flavor+' - '+response[i].style+' - '+ '<button type="button" class="btn btn-warning">edit</button>'+'<button type="button" class="btn btn-danger">delete</button>'+'</li>';
          $donuts.prepend(newLi);
        }
        console.log(status);
      },
      error: function (response, status) {
        console.log(response);
        console.log(status);
    }
  });


// POST request
$('#new-doughnut').on("submit",function(e){
  e.preventDefault();
var newFlavor = $('#new-doughnut-flavor');
var newStyle = $('#new-doughnut-style');

  $.ajax({
      url: 'http://api.doughnuts.ga/doughnuts',
      method: "POST",
      data: {
        style: newStyle.val(),
        flavor: newFlavor.val()
      },
      success: function (response, status) {
        console.log(response);
        var newLi = '<li data-id='+response.id+'>'+response.flavor+' - '+response.style+' - '+ '<button type="button" id="edit" class="btn btn-warning">edit</button>'+'<button type="button" id="delete" class="btn btn-danger">delete</button>'+'</li>';
        $donuts.prepend(newLi);
        console.log(status);
      },
      error: function (response, status) {
        console.log(response);
        console.log(status);
    }
  });
});

// DELETE request
  $.ajax({
      url: 'http://api.doughnuts.ga/doughnuts',
      method: "DELETE",
      },
      success: function (response, status) {
        console.log(response);
        $('#delete').off().on('click', function () {
          $(this).parent().parent().remove();
        });
        console.log(status);
      },
      error: function (response, status) {
        console.log(response);
        console.log(status);
    }
  });


// function bindEditButton () {
//   (target).on("click", function () {

//   })
// }




// // PUT request
  // $.ajax({
  //     url: 'http://api.doughnuts.ga/doughnuts/1',
  //     method: "PUT",
  //     data: {
  //       style: "Cream",
  //       flavor: "Chocolate"
  //     },
  //     success: function (response, status) {
  //       console.log(response);
  //       console.log(status);
  //     },
  //     error: function (response, status) {
  //       console.log(response);
  //       console.log(status);
  //   }
  // });



});