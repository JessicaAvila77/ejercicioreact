import UseCuadratica from "../hooks/UseCuadratica"

const Cuadratica = () => {

    
        //para utilzar las variables importar el hook
        const {valorA,
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
        } = UseCuadratica()

    return (

        

        <div className="Container mt-5">

            <div className="row justify-content-center">
                <div className="col-6 mb-5">
                <h4>Ingrese datos</h4>                                     
                </div>
            </div> 

            <div className="row justify-content-center">
                <div className="col-6 mb-5">
                    <label className="fomrm-label">Ingrese el valor de A</label>
                    <input type="number" className="form-control" value={valorA} onChange={(e) => setValorA(e.target.value)}/>                   
                </div>
            </div> 

            <div className="row justify-content-center">
                <div className="col-6 mb-5">
                    <label className="fomrm-label">Ingrese el valor de B</label>
                    <input type="number" className="form-control" value={valorB} onChange={(e) => setValorB(e.target.value)} />                   
                </div>
            </div>     

            <div className="row justify-content-center">
                <div className="col-6 mb-5">
                    <label className="fomrm-label">Ingrese el valor de C</label>
                    <input type="number" className="form-control" value={valorC} onChange={(e) => setValorC(e.target.value)} />                   
                </div>
            </div>  

            <div className="row justify-content-center">
                <div className="col-6 mb-5">
                <h4>Resultados</h4>                                     
                </div>
            </div> 

          

            <div className="row justify-content-center">
                <div className="col-6 mb-5">
                    <label className="fomrm-label">X1</label>
                    <input type="number" className="form-control" value={x1} readOnly />                   
                </div>
            </div>  

            <div className="row justify-content-center">
                <div className="col-6 mb-5">
                    <label className="fomrm-label">X2</label>
                    <input type="number" className="form-control" value={x2} readOnly/>                   
                </div>
            </div>  


            <div className="row justify-content-center">
                <div className="col-3 mb-5">
                   <button className="btn btn-success" onClick={Calcular}>Calcular</button>                
                </div>
                <div className="col-3 mb-5">
                   <button className="btn btn-danger" onClick={Limpiar}>Limpiar</button>                
                </div>
            </div>  
        </div>


       
    )
    

}

export default Cuadratica