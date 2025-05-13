const BuscadorVuelos = () => {
  return (
    <> 
    <div className="h1">Buscador de Vuelos</div>
    <div className="car mt-4">
      <div className="card-header">Busqueda de vuelos</div>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label>Fecha Inicial</label>
              <input type="date" className="form-control"/>
            </div>
          </div>
           <div className="col-sm-6">
            <div className="mb-3">
              <label>Fecha Final</label>
              <input type="date" className="form-control"/>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="mb-3">
               <label>Origen</label>
               <select className="form-control"></div></select>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   )
}
 
export default BuscadorVuelos;