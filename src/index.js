function calcularConceptos(movimientos) {
  let sumaIngresos = 0;
  let sumaGastos = 0;



  movimientos.forEach(m => {
   if (m > 0) {
   sumaIngresos += m 
  } else
   sumaGastos += m

  });
    

  /**
   * Ejercicio 1: Codificar solamente DENTRO DE LA FUNCIÓN.
   * Acumula en sumaIngresos todos los ingresos (números positivos, y en sumaGastos todos los gastos (números )). NO TOCAR lo que ya está escrito
   */

  return [sumaIngresos, sumaGastos];
}

const [ingresos, gastos] = calcularConceptos([10, -2, 1, -4]);


/** NO SE TOCA */

document.getElementById("app").innerHTML = `
<h1>Mi balance </h1>
<p>Ingresos: ${ingresos}</p>
<p>Gastos: ${gastos}</p>
`;

/** NO SE TOCA */

/** Ejercicio 2. Usa la desestructuración de arrays para asignar el valor que retorna la función calcularConceptos a las variables ingresos y gastos. La variable 'resultado' debe desaparecer.  */
