export default function getCurrentDate(){
    const fechaActual = new Date();

    const dia = String(fechaActual.getDate()).padStart(2, '0');
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const anio = fechaActual.getFullYear();

    const fechaFormateada = `${dia}-${mes}-${anio}`;

  return fechaFormateada;
}