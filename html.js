
function aceptarSolicitud(numeroSolicitud) {
   
    var solicitudAceptada = document.getElementById("solicitud" + numeroSolicitud);
    

    var perfilAceptado = solicitudAceptada.cloneNode(true);
    
    
    solicitudAceptada.parentNode.removeChild(solicitudAceptada);
    
   
    var cantidadSolicitudes = document.getElementById("cantidad-solicitudes");
    cantidadSolicitudes.textContent = parseInt(cantidadSolicitudes.textContent) - 1;
   
    var cantidadConexiones = document.getElementById("cantidad-conexiones");
    cantidadConexiones.textContent = parseInt(cantidadConexiones.textContent) + 1;
  
    var contenedorConexiones = document.querySelector('.blanco4');
    contenedorConexiones.appendChild(perfilAceptado);
  }
  

  function rechazarSolicitud(numeroSolicitud) {
   
    var solicitudRechazada = document.getElementById("solicitud" + numeroSolicitud);
    
    
    solicitudRechazada.parentNode.removeChild(solicitudRechazada);
    
    
    var cantidadSolicitudes = document.getElementById("cantidad-solicitudes");
    cantidadSolicitudes.textContent = parseInt(cantidadSolicitudes.textContent) - 1;
  }