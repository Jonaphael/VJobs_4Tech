(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('need-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          else{
             // add_card();
          }
          form.classList.add('was-validated');          
        }, false);
      });
    }, false);
})();

/* add a new card ( there is a better way //TODO )*/
function add_card(){
  
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var habilities = document.getElementById("habilities").value;
    var qualifications = document.getElementById("qualifications").value;
    var salary = document.getElementById("salary").value;


    var content = "<div class='col-sm-12 col-md-6 col-lg-4 mb-3'>" +
                    "<div class='card'>"+
                        "<img class='card-img-top' src='imgs/designer.png' alt='Card image cap'>"+
                            "<div class='card-body'>"+
                            "<h5 class='card-title'>"+name+"</h5>"+
                            "<b>Description:</b>"+
                            "<p class='card-text'>"+ description+"</p>"+
                            "<b>Salary</b>"+
                            "<p>" + salary + "</p>"+
                            "<a href='#' class='btn btn-warning'><i class='fas fa-edit'></i></a> "+
                            "<a href='#' class='btn btn-danger'><i class='fas fa-trash-alt'></i></a> "+
                    "</div>"+
                "</div>";

        var card_container = document.getElementById("card-containers");
        card_container.insertAdjacentHTML('beforeend',content);

        /* clean up */
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("habilities").value = "";
        document.getElementById("qualifications").value = "";
        document.getElementById("salary").value = "";
}
