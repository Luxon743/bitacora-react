import './App.css';
import { useEffect, useState } from "react";
import { FormularioCarga } from './components/FormularioCarga';
import { HistorialCargas } from './components/HistorialCargas';

function App() {
  const [kmInicio, setKmInicio] = useState("");
  const [kmActual, setKmActual] = useState("");
  const [litros, setLitros] = useState("");
  const [resultado, setResultado] = useState("");
  
  const [viajeActual, setViajeActual] = useState({
    kmInicial: null as number | null,
    cargas: [] as { km: number; litros: number }[],
  });

  // Cargar localStorage
  useEffect(() => {
    const data = localStorage.getItem("viajeActual");
    if (data) {
      const parsed = JSON.parse(data);
      setViajeActual(parsed);

      if (parsed.kmInicial !== null) {
        setKmInicio(parsed.kmInicial.toString());
      }
    }
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("viajeActual", JSON.stringify(viajeActual));
  }, [viajeActual]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const kmI = parseFloat(kmInicio);
    const kmA = parseFloat(kmActual);
    const l = parseFloat(litros);

    if (kmA <= kmI) {
      setResultado('<p class="text-red-500">Error: Los Km finales deben ser mayores a los iniciales.</p>');
      return;
    }

    let nuevoViaje = { ...viajeActual };

    if (nuevoViaje.kmInicial === null) {
      nuevoViaje.kmInicial = kmI;
    }

    if (isNaN(kmI) || isNaN(kmA)) {
      setResultado('<p class="text-red-500">El kilometraje actual es obligatorio</p>');
      return;
    }

    if (isNaN(l) || l <= 0) {
      setResultado('<p class="text-red-500">Ingresá litros válidos</p>');
      return;
    }

    let ultimoKm = nuevoViaje.kmInicial;
    if (nuevoViaje.cargas.length > 0) {
      ultimoKm = nuevoViaje.cargas[nuevoViaje.cargas.length - 1].km;
    }

    if (kmA <= ultimoKm!) {
      setResultado(`<p class="text-red-500">El KM actual debe ser mayor al último registrado (${ultimoKm})</p>`);
      return;
    }

    if (kmI < 0 || kmA < 0) {
      setResultado('<p class="text-red-500">Los kilómetros no pueden ser negativos</p>');
      return;
    }

    nuevoViaje.cargas.push({ km: kmA, litros: l });

    setViajeActual(nuevoViaje);
    setResultado(`<div class="bg-green-100 text-green-700 p-4 rounded-lg"><p>Carga agregada correctamente</p></div>`);

    setKmActual("");
    setLitros("");
  }

  function handleCalcular() {
    if (viajeActual.cargas.length === 0) {
      setResultado('<p class="text-red-500">No hay cargas registradas</p>');
      return;
    }

    let totalLitros = 0;
    viajeActual.cargas.forEach((c) => (totalLitros += c.litros));

    const kmFinal = viajeActual.cargas[viajeActual.cargas.length - 1].km;
    const distancia = kmFinal - viajeActual.kmInicial!;

    if (distancia <= 0) {
      setResultado('<p class="text-red-500">Error en el cálculo de distancia</p>');
      return;
    }

    const consumo = (totalLitros / distancia) * 100;

    setResultado(`
      <div class="bg-green-100 text-green-700 p-4 rounded-lg">
        <p><strong>Distancia total:</strong> ${distancia} km</p>
        <p><strong>Litros totales:</strong> ${totalLitros} L</p>
        <p><strong>Consumo promedio:</strong> ${consumo.toFixed(2)} L/100km</p>
      </div>
    `);
  }

  function handleReset() {
    const reset = { kmInicial: null, cargas: [] };
    setViajeActual(reset);
    localStorage.removeItem("viajeActual");

    setKmInicio("");
    setKmActual("");
    setLitros("");

    setResultado('<p class="text-orange-500">Viaje reiniciado</p>');
  }

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-6xl flex gap-6">
        
        {}
        <FormularioCarga 
          kmInicio={kmInicio}
          setKmInicio={setKmInicio}
          kmActual={kmActual}
          setKmActual={setKmActual}
          litros={litros}
          setLitros={setLitros}
          kmInicialDeshabilitado={viajeActual.kmInicial !== null}
          handleSubmit={handleSubmit}
          resultado={resultado}
        />

        {}
        <HistorialCargas 
          cargas={viajeActual.cargas}
          handleCalcular={handleCalcular}
          handleReset={handleReset}
        />

      </div>
    </div>
  );
}

export default App;