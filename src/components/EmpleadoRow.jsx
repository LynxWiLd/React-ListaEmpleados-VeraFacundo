import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ empleado }) => {
  return (
    <div className="d-flex align-items-center border-bottom py-3 gap-3 mb-3">
      <EmpleadoAvatar pic={empleado.pic} fullName={empleado.fullName} />
      <div>
        <h5 className="mb-0">{empleado.fullName}</h5>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-1 text-white">{empleado.title}</p>
          <div className="badge bg-info text-wrap">{empleado.department}</div>
        </div>
      </div>
    </div>
  );
};

export default EmpleadoRow;
