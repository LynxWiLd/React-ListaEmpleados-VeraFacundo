import { useState } from "react";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = () => {
  const [empleados, setEmpleados] = useState([
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "perfil_01.jpg",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "perfil_02.jpg",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "perfil_03.jpg",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "perfil_04.jpg",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "perfil_05.jpg",
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "perfil_06.jpg",
    },
    {
      id: 7,
      fullName: "Ellen Balderas",
      title: "Digital Strategist",
      department: "Marketing",
      pic: "perfil_07.jpg",
    },
    {
      id: 8,
      fullName: "Cynthia Valentín",
      title: "Backend Dev",
      department: "Engineering",
      pic: "perfil_08.jpg",
    },
    {
      id: 9,
      fullName: "Bernard Jung",
      title: "DevOps Engineer",
      department: "Engineering",
      pic: "perfil_09.jpg",
    },
    {
      id: 10,
      fullName: "Jamie Lee",
      title: "UX Designer",
      department: "Design",
      pic: "perfil_10.jpg",
    },
  ]);

  return (
    <section className="container text-center ">
      <h2 className="text-light">Lista de Empleados</h2>
      <div className="border border-black w-50 mx-auto p-4 bg-black bg-opacity-25 text-white rounded-3">
        {empleados.map((empleado) => (
          <EmpleadoRow key={empleado.id} empleado={empleado} />
        ))}
      </div>
    </section>
  );
};

export default EmpleadoList;
