$(document).ready(function() {
    let solicitudes = [{
        "id": 1, 
        "nombre": "Juan",
        "apellido": "Secreto"
    }, {
        "id": 2, 
        "nombre": "Antonio",
        "apellido": "Pero"
    }, {
        "id": 3, 
        "nombre": "de la Encarnación",
        "apellido": "No tanto"
    }];
   
    $("#boton").on("click", function(event) {
        alert("Hello! Allert!");
    })

    $("#hide").on("click", function(event) {
        if($("#mirage").is(':visible')) {
            $("#mirage").hide();
            $("#hide").text("Show");
        } else {
            $("#mirage").show();
            $("#hide").text("Hide");

            
        }
    })

    $("#add").on("click", function(event) {
        $("#button-array").append(
            $("<button>")
            .text("new")
        )
    })

    const data = [
        {day: "Monday", }
    ]
    
    $("#remove").on("click", function(event) {
        $("#button-array").children().last().remove();
    })

    for (i = 0 ; i < solicitudes.length; i++ ) {
        $("#maestro").append(
            $("<li>")
                .text(solicitudes[i].nombre + ' ' + solicitudes[i].apellido)
                .val(solicitudes[i])
                .attr("id", "id" + solicitudes[i].id)
        );
    }



    $("li").on("click", function(event) {
        if ($("#detalle").is(':visible')) {
            $("#detalle").hide();
        } else {
            $("#detalle").show();
            

            let solicitud = $(this).attr("id");

            $("#id").val(solicitud);
            $("#nombre").val("Juan"  + solicitud);
            $("#apellido").val("Secreto" + solicitud);            
        }
        
    })
});