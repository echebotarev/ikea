(function($){$.fn.actual=function(){if(arguments.length&&typeof arguments[0]=='string'){var dim=arguments[0];$(this).addClass('liActualSize')
if(this.is(':visible'))return this[dim]();var clone=$('body').clone().css({position:'absolute',top:'-99999px',left:'-99999px',visibility:'hidden'}).appendTo('body');clone.find('*').show();var s=clone.find('.liActualSize')[dim]();clone.remove();$(this).removeClass('liActualSize')
return s;};return undefined;};}(jQuery));