'use client'

import React from "react";
import ListingStatus from "../../sidebar/ListingStatus";
import PropertyType from "../../sidebar/PropertyType";
import PriceRange from "../../sidebar/PriceRange";
import Bedroom from "../../sidebar/Bedroom";
import Bathroom from "../../sidebar/Bathroom";

const TopFilterBar = ({filterFunctions,setCurrentSortingOption,colstyle,setColstyle}) => {
  
  return (
    <>
      <div className="col-xl-9 d-none d-lg-block">
        <div className="dropdown-lists">
          <ul className="p-0 text-center text-xl-start">
            <li className="list-inline-item position-relative">
              <button
                type="button"
                className="open-btn mb15 dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Para Venta <i className="fa fa-angle-down ms-2" />
              </button>
              <div className="dropdown-menu">
                <div className="widget-wrapper bdrb1 pb25 mb0 pl20">
                  <h6 className="list-title">Tipo</h6>
                  <div className="radio-element">
                    <ListingStatus filterFunctions={filterFunctions} />
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm drop_btn"
                  >
                    Done
                  </button>
                </div>
              </div>
            </li>
            {/* End li Tipo */}

            <li className="list-inline-item position-relative">
              <button
                type="button"
                className="open-btn mb15 dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Tipo de Propiedad <i className="fa fa-angle-down ms-2" />
              </button>
              <div className="dropdown-menu">
                <div className="widget-wrapper bdrb1 pb25 mb0 pl20">
                  <h6 className="list-title">Tipo de Propiedad</h6>
                  <div className="checkbox-style1">
                    <PropertyType filterFunctions={filterFunctions}/>
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm dropdown-toggle"
                  >
                    Done
                  </button>
                </div>
              </div>
            </li>
            {/* End li Tipo de Propiedad */}

            <li className="list-inline-item position-relative">
              <button
                type="button"
                className="open-btn mb15 dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Precio <i className="fa fa-angle-down ms-2" />
              </button>

              <div className="dropdown-menu dd3">
                <div className="widget-wrapper bdrb1 pb25 mb0 pl20 pr20">
                  <h6 className="list-title">Rango de Precio</h6>
                  {/* Range Slider Desktop Version */}
                  <div className="range-slider-style1">
                    <PriceRange filterFunctions={filterFunctions}/>
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm drop_btn3"
                  >
                    Done
                  </button>
                </div>
              </div>
            </li>
            {/* End li Price */}

            <li className="list-inline-item position-relative">
              <button
                type="button"
                className="open-btn mb15 dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Habitaciones <i className="fa fa-angle-down ms-2" />
              </button>
              <div className="dropdown-menu dd4 pb20">
                <div className="widget-wrapper pl20 pr20">
                  <h6 className="list-title">Recámaras</h6>

                  <div className="d-flex">
                    <Bedroom filterFunctions={filterFunctions}/>
                  </div>
                </div>

                <div className="widget-wrapper bdrb1 pb25 mb0 pl20 pr20">
                  <h6 className="list-title">Baños</h6>
                  <div className="d-flex">
                    <Bathroom filterFunctions={filterFunctions}/>
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm drop_btn4"
                  >
                    Done
                  </button>
                </div>
              </div>
            </li>
            {/* End bed and bathroom check */}

            <li className="list-inline-item">
              {/* Advance Features modal trigger */}
              <button
                type="button"
                className="open-btn mb15"
                data-bs-toggle="modal"
                data-bs-target="#advanceSeachModal"
              >
                <i className="flaticon-settings me-2" /> Más Filtros
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col-9 */}

      <div className="col-xl-3">
        <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
          <div className="pcs_dropdown pr10 d-flex align-items-center">
            <span style={{ minWidth: "60px" }}>Orden</span>
            <select className="form-select" onChange={(e)=>setCurrentSortingOption && setCurrentSortingOption(e.target.value)} >
    <option>Más Reciente</option>
<option>Más Vendido</option>
<option>Mejor Coincidencia</option>
<option>Precio Bajo</option>
<option>Precio Alto</option>

            </select>
          </div>
          <div className={`pl15 pr15 bdrl1 bdrr1 d-none d-md-block  cursor ${!colstyle? 'menuActive':'#' } `}    onClick={()=>setColstyle(false)}>
            Tabla
          </div>
          <div className={`pl15 d-none d-md-block  cursor ${colstyle? 'menuActive':'#' }`}   onClick={()=>setColstyle(true)}>
            Lista
          </div>
        </div>
      </div>
      {/* End .col-3 */}
    </>
  );
};

export default TopFilterBar;
