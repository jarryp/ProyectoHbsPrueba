var source = $("#template_persona").html();
var template = Handlebars.compile(source);

var personas =[
    {'nombre':'Jairo','apellido':'Palacios R','correo':'jarryj.palacios@gmail.com'},
    {'nombre':'Jarry','apellido':'Palacios Rivas','correo':'palacios@gmail.com'},
    {'nombre':'Javier Alfonso','apellido':'Palacios','correo':'japalacios@gmail.com'},
]

var html = template({'persona':personas});

$("#contenedor").html(html);



