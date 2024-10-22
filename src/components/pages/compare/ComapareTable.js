import Image from "next/image";

const ComapareTable = () => {
  return (
    <table className="table table-borderless mb-0">
      <thead className="t-head">
        <tr>
          <th scope="col" />
          <th scope="col">Casa en Carrer de la Marina</th>
          <th scope="col">Villa en Paseo de Gracia</th>
          <th scope="col">Explora el Barrio Gótico</th>
        </tr>
      </thead>
      {/* End thead */}

      <thead className="t-head2">
        <tr>
          <th scope="col" />
          {/* End th */}

          <th scope="col">
            <div className="membership_header">
              <div className="thumb">
                <Image
                  width={331}
                  height={245}
                  className="img-fluid mb-3 w100"
                  src="/images/listings/compare-1.jpg"
                  alt="compare-1"
                />
                <div className="h6 price mt-1">14.000  / mes</div>
                <p className="address mb-0">Barcelona, España</p>
              </div>
            </div>
          </th>
          {/* End th */}

          <th scope="col">
            <div className="membership_header">
              <div className="thumb">
                <Image
                  width={331}
                  height={245}
                  className="img-fluid mb-3 w100"
                  src="/images/listings/compare-1.jpg"
                  alt="compare-1"
                />
                <div className="h6 price mt-1">14.000  / mes</div>
                <p className="address mb-0">Barcelona, España</p>
              </div>
            </div>
          </th>
          {/* End th */}

          <th scope="col">
            <div className="membership_header">
              <div className="thumb">
                <Image
                  width={331}
                  height={245}
                  className="img-fluid mb-3 w100"
                  src="/images/listings/compare-1.jpg"
                  alt="compare-1"
                />
                <div className="h6 price mt-1">14.000  / mes</div>
                <p className="address mb-0">Barcelona, España</p>
              </div>
            </div>
          </th>
          {/* End th */}
        </tr>
      </thead>
      {/* End thead2 */}

      <tbody className="t-body">
        <tr>
          <th className="text-end" scope="row">
            Tipo de Propiedad
          </th>
          <td>Apartamento</td>
          <td>Estudio</td>
          <td>Villa</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Dirección
          </th>
          <td>Carrer de la Marina</td>
          <td>Paseo de Gracia</td>
          <td>Carrer de Montcada</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Ciudad
          </th>
          <td>Barcelona</td>
          <td>Barcelona</td>
          <td>Barcelona</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Provincia
          </th>
          <td>Barcelona</td>
          <td>Barcelona</td>
          <td>Barcelona</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Código Postal
          </th>
          <td>08025</td>
          <td>08007</td>
          <td>08003</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            País
          </th>
          <td>España</td>
          <td>España</td>
          <td>España</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Tamaño de la Propiedad
          </th>
          <td>2560 m²</td>
          <td>2560 m²</td>
          <td>2560 m²</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            ID de la Propiedad
          </th>
          <td>R43</td>
          <td>R43</td>
          <td>R43</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Habitaciones
          </th>
          <td>3</td>
          <td>2</td>
          <td>5</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Baños
          </th>
          <td>1</td>
          <td>4</td>
          <td>3</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Garaje
          </th>
          <td>1</td>
          <td>4</td>
          <td>3</td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Aire Acondicionado
          </th>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Barbacoa
          </th>
          <td>
            <a className="check_circle_close" href="#">
              <span className="fas fa-xmark" />
            </a>
          </td>
          <td>
            <a className="check_circle_close" href="#">
              <span className="fas fa-xmark" />
            </a>
          </td>
          <td>
            <a className="check_circle_close" href="#">
              <span className="fas fa-xmark" />
            </a>
          </td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Gimnasio
          </th>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            Piscina
          </th>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
        </tr>
        {/* End tr */}

        <tr>
          <th className="text-end" scope="row">
            TV / Cable
          </th>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
          <td>
            <a className="check_circle" href="#">
              <span className="fas fa-check" />
            </a>
          </td>
        </tr>
        {/* End tr */}
      </tbody>
      {/* End tbody */}
    </table>
  );
};

export default ComapareTable;
