$(document).ready(function(){
    var listo = [];
    $('#newTaskForm').hide();
    
    var Task = function(task) {
		this.task = task;
		this.id = 'new';
	}
  //add Task function  
    var addTask = function(task) {
    if(task) {
            task = new Task(task);
			listo.push(task);
        $('#newItemInput').val('');
			$('#newList').append('<a href="#" class="" id="item"><li class="list-group-item">' + task.task + '<span class="arrow pull-right"><i class="glyphicon glyphicon-arrow-right"></span></li></a>');
		}
  $('#newListItem').on('click', function () {       
$('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');

	});

     $('#saveNewItem').on('click', function (e) {
        e.preventDefault();
        var task = $('#newItemInput').val().trim();
        addTask(task);
    });
    $('#cancel').on('click', function (e) {
        e.preventDefault();
        $('#newTaskForm,  #newListItem').fadeToggle('fast', 'linear');
    });
    
  $(document).on('click', '#item', function(e) {
		e.preventDefault();
        var task = this;		
        advanceTask(task);
        this.id = 'inProgress';
      
      $('#currentList').append(this.outerHTML);
	});  
    
   $(document).on('click', '#archived', function(e) {
		e.preventDefault();
        var task = this;		
        advanceTask(task);
   });
     
    
    
});