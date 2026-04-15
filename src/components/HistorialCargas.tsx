interface Carga {
    km: number;
    litros: number;
}

interface HistorialProps {
    cargas: Carga[];
    handleCalcular: () => void;
    handleReset: () => void;
}

export function HistorialCargas({ cargas, handleCalcular, handleReset }: HistorialProps) {
    function renderTabla() {
        if (cargas.length === 0) {
        return (
            <tr>
            <td colSpan={2} className="text-center text-gray-400 p-4">
                No hay cargas registradas
            </td>
            </tr>
        );
    }

    return cargas.map((carga, i) => (
        <tr key={i} className="border-b">
            <td className="p-2">{carga.km}</td>
            <td className="p-2">{carga.litros}</td>
        </tr>
        ));
    }

    return (
        <div className="w-1/2 bg-white p-6 rounded-2xl shadow flex flex-col">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Historial de Cargas
            </h2>

            <div className="flex-1 overflow-y-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-600">
                            <th className="p-2">KM</th>
                            <th className="p-2">Litros</th>
                        </tr>
                    </thead>
                    <tbody>{renderTabla()}</tbody>
                </table>
            </div>

            <div className="mt-4 flex gap-2">
                <button
                onClick={handleCalcular}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                    Calcular Viaje
                </button>

                <button
                onClick={handleReset}
                className="flex-1 bg-gray-300 py-2 rounded-lg hover:bg-gray-400 transition"
                >
                Limpiar
                </button>
            </div>
        </div>
    );
}