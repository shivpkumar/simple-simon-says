$(document).ready(function(){

  $('#get_color').on('click', function(event) {
    event.preventDefault();

    var request = $.ajax({
      type: 'post',
      url: '/color'
    });

    function colorizeCell(data) {
      var specs = $.parseJSON(data);
      console.log(specs[0]);
      console.log(specs[1]);
      $('li:nth-child(' + specs[0] + ')').attr('style', 'background-color: ' + specs[1]);
    }

    request.done(colorizeCell);
  });
});
