$('document').ready(function(){

// A FEW WAYS TO LOAD HTML PAGES INTO ANOTHER.  LOAD IS EASIEST, BUT HAS RESTRICTIONS

  // LOADS - LOCAL, HTML PAGE INTO ANOTHER
  // $('#result').load('test.html');

  // LOADS - LOCAL, HTML PAGE INTO ANOTHER
  // $('#result').load('test.html', function(
  //   responseTxt, statusTxt, xhr){  // LOAD REPORT
  //     if(statusTxt == "success"){
  //       alert('It went fine');
  //     } else if (statusTxt == "error"){
  //       alert("Error: " + xhr.statusTxt);
  //     }
  // });


  // GET REQUEST - LOCAL, HTML PAGE INTO ANOTHER
  // $.get('test.html', function(data) {
  //   $('#result').html(data);
  // })

  // GET REQUEST - LOCAL, LOADS LOCAL JSON FILE INTO LI
  // $.getJSON('users.json', function(data) {
  //   $.each(data, function(i, user) {
  //     $('ul#users').append('<li>' + user.firstName + '</li>');
  //   })
  // })

  // GET REQUEST - AJAX, LOADS JSON API FAKER VIA AJAX INTO RESULT ID DIV.
  // $.ajax({
  //   method: 'GET',
  //   url: 'https://jsonplaceholder.typicode.com/posts', dataType: 'json'
  // }).done(function(data) {
  //   console.log(data);
  //   $.map(data, function(post, i) {
  //     $('#result').append('<h3>' + post.title + '</h3><p>' + post.body + '</p>');
  //   })
  // })

  // POST REQUEST - AJAX, SENDS FORM DATA TO LOG.
  $('#postForm').submit(function(e){
    e.preventDefault();

    var title = $('#title').val();
    var body = $('#body').val();
    var url = $(this).attr('action');

    $.post(url, {title:title, body:body}).
      done(function(data){
      console.log('Post Saved');
      console.log(data);
    });
  });






});
