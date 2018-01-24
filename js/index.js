$(window).load(function () {
    $('#login-page').slideUp(500);
    $('#secInventario').hide();
});

$('#btnIngresar').click(function () {
    $('#login-page').slideToggle(500);
});

$('#btnLogin').click(function (ev) {
    var user = $('#username').val();
    var pwd = $('#password').val();  
    if (user != '' )
    {
        if (!user.includes("@")) {
            alert('Usuario no valido');
            ev.preventDefault();
        }
        else
        {
            $('#secLogin').hide();
            $('#secInventario').show();
            ev.preventDefault();
        }
    }
});

$('.parent div').on('click', function (ev) {

    if ($(ev.currentTarget).css("background-color")== 'rgb(255, 0, 0)') {
        $(ev.currentTarget).css("background-color", "white");
        $(ev.currentTarget).css("color", "gray");
    }
    else {
        $(ev.currentTarget).css("background-color", "red");
        $(ev.currentTarget).css("color", "white");
    }

});

$('#enviarInventario').on('click', function (ev) {

    var seleccionados = $("div[style|='background-color: red; color: white;'").css("background-color", "green");
    var mensaje = 'Se solicitaron exitosamente los siguentes productos: ';
    var productos = '';
    seleccionados.each(function () {
        productos+= '\n'+$(this).text();
    });
    alert(mensaje + productos);
}
);
