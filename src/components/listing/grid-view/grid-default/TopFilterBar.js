'use client'

import React from "react";

const TopFilterBar = ({setCurrentSortingOption,setColstyle,colstyle,pageContentTrac}) => {
  return (
    <>
      <div className="col-sm-6">
        <div className="text-center text-sm-start">
          <p className="pagination_page_count mb-0">
            Mostrando {pageContentTrac[0]}–{pageContentTrac[2] < pageContentTrac[1] ? pageContentTrac[2] : pageContentTrac[1]} of {pageContentTrac[2]} resultados
          </p>
        </div>
      </div>
      {/* End .col-sm-6 */}

      <div className="col-sm-6">
        <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
          <div className="pcs_dropdown pr10 d-flex align-items-center">
            <span style={{ minWidth: "60px" }}>Ordenar</span>
            <select className="form-select"  onChange={(e)=>setCurrentSortingOption && setCurrentSortingOption(e.target.value)} >
    <option>Más Reciente</option>
<option>Más Vendido</option>
<option>Mejor Coincidencia</option>
<option>Precio Bajo</option>
<option>Precio Alto</option>

            </select>
          </div>
          <div className={`pl15 pr15 bdrl1 bdrr1 d-none d-md-block cursor  ${!colstyle? 'menuActive':'#' } `}  onClick={()=>setColstyle(false)}>
            Tabla
          </div>
          <div className={`pl15 d-none d-md-block cursor  ${colstyle? 'menuActive':'#' }`}   onClick={()=>setColstyle(true)}>
            Lista
          </div>
        </div>
      </div>
      {/* End .col-sm-6 */}
    </>
  );
};

export default TopFilterBar;
