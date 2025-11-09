function EmpleadoAvatar({ pic, fullName }) {
  return (
    <img
      src={`./public/empleadosAvatares/${pic}`}
      alt={fullName}
      className="rounded-circle border border-secondary"
      width="100"
    />
  );
}

export default EmpleadoAvatar;
