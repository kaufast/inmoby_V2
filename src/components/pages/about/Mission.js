const Mission = () => {
  const missionData = [
    {
      icon: "flaticon-garden",
      title: "Piso Moderno",
      description: "Nullam sollicitudin blandit Nullam maximus.",
    },
    {
      icon: "flaticon-secure-payment",
      title: "Tu Pago Seguro",
      description: "Nullam sollicitudin blandit Nullam maximus.",
    },
  ];

  return (
    <>
      {missionData.map((item, index) => (
        <div className="col-sm-6" key={index}>
          <div className="why-chose-list style3">
            <div className="list-one mb30">
              <span className={`list-icon flex-shrink-0 ${item.icon} mb20`} />
              <div className="list-content flex-grow-1">
                <h6 className="mb-1">{item.title}</h6>
                <p className="text mb-0 fz14">
                  Diseñada con los más altos estándares de lujo y confort. 
                  <br className="d-none d-sm-block" /> Espacios amplios y acabados de primera calidad, en una ubicación privilegiada.
                  {" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Mission;
