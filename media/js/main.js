// Rotinas Javascript
$(function() {
	$( "#livro_capitulo" ).autocomplete({
				// Busca os livros e seus respectivos cap�tulos
				source: "/livros/",
				minLength: 2,
				select: function( event, ui ) {
					alert(ui.item.value);
				}
			});
});