
import { useState } from "react";
import Swal from "sweetalert2";

const UseCuadratica = () => {
    const [valorA, setValorA] = useState ('')
    const [valorB, setValorB] = useState ('')
    const [valorC, setValorC] = useState ('')
    const [x1, setX1] = useState ('')
    const [x2, setX2] = useState ('')

    const Calcular = () => {
        if (valorA === ''){
            alerta ('Ingrese el valor de A')
        }else if (Number(valorA) === 0){
            alerta ('El valor de A no puede ser 0')
        }else if (valorB === ''){
            alerta ('Ingrese el valor de B')
        }else if (valorC === ''){
            alerta ('Ingrese el valor de C')       
        }else{

            let discriminante = (Number(valorB)*Number(valorB)) - (4*Number(valorA)*Number(valorC));
            
            if (discriminante >= 0){

               let raizx1 = (-Number(valorB) + Math.sqrt(discriminante))/(2*Number(valorA));
               let raizx2 = (-Number(valorB) - Math.sqrt(discriminante))/(2*Number(valorA));
               setX1(raizx1);
               setX2(raizx2);

            }else{

                alerta ('La raiz no puede ser negativa')

            }


        }

    }

    const Limpiar = () => {
        setValorA('');
        setValorB('');
        setValorC('');
        setX1('');
        setX2('');
    }

    const alerta = (mensaje) => {
        Swal.fire({
            title: "Advertencia",
            text: mensaje,
            icon: "warning"
          });
    }

    return {
        valorA,
        setValorA,
        valorB,
        setValorB,
        valorC,
        setValorC,
        x1,
        setX1,
        x2,
        setX2,
        Calcular,
        Limpiar
    }

}

export default UseCuadratica