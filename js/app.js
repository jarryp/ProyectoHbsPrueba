var source = $("#template_persona").html();
var template = Handlebars.compile(source);

var persona ={'nombre':'Alfonso',
              'apellido':'Palacios',
              'correo':'jarryj.palacios@gmail.com'}

var html = template(persona);

$("#contenedor").html(html);



