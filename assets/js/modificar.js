

$(document).ready(function() {
	$('.delete-receta').on('click', function() {
		var id = $(this).data('id');
		var url = '/delete/'+id;
		if (confirm('Desea Eliminar Receta?')) {
			$.ajax({
				url: url, 
				type: 'DELETE', 
				success: function(result){
					console.log('Elimando Receta...');
					window.location.href='/';
				},
				error: function(err){
					console.log(err);
				}
			});
		}
	});

	$('.edit-usuario').on('click', function(){
	$('#edit-form-cedula').val($(this).data('cedula'))
	// body...
})

	$('.edit-category').on('click', function(){
		$('#edit-form-name').val($(this).data('name'));
		$('#edit-form-id').val($(this).data('id'));
	});

	$('.edit-factor').on('click', function(){
		$('#edit-form-name').val($(this).data('name'));
		$('#edit-form-id').val($(this).data('id'));
	});

	$('.edit-t-instrument').on('click', function(){
		$('#edit-form-name').val($(this).data('name'));
		$('#edit-form-id').val($(this).data('id'));
	});

	$('.detalle-instrument').on('click', function(){
		$('#detalle-form-id').val($(this).data('id'));
		$('#detalle-form-title').val($(this).data('title'));
		$('#detalle-form-category').val($(this).data('category'));
		$('#detalle-form-enfoque').val($(this).data('enfoque'));
	});

	$('.edit-instrument').on('click', function(){
		$('#edit-form-id').val($(this).data('id'));
		$('#edit-form-name').val($(this).data('name'));
		$('#edit-form-category').val($(this).data('category'));
		$('#edit-form-tinstrument').val($(this).data('tinstrument'));
	});

	$('.edit-item').on('click', function(){
		$('#edit-form-name').val($(this).data('name'));
		$('#edit-form-id').val($(this).data('id'));
		$('#id_instrument').val($(this).data('instrument'));
	});
});