import React from "react";

interface FormularioProps {
    kmInicio: string;
    setKmInicio: (valor: string) => void;
    kmActual: string;
    setKmActual: (valor: string) => void;
    litros: string;
    setLitros: (valor: string) => void;
    kmInicialDeshabilitado: boolean;
    handleSubmit: (e: React.FormEvent) => void;
    resultado: string;
}

export function FormularioCarga({
    kmInicio,
    setKmInicio,
    kmActual,
    setKmActual,
    litros,
    setLitros,
    kmInicialDeshabilitado,
    handleSubmit,
    resultado
}: FormularioProps) {
    return (
        <div className="w-1/2 bg-white p-6 rounded-2xl shadow">
            <h1 className="text-2xl font-bold text-gray-700 mb-6">
            Registro de Carga
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
                <label className="text-sm text-gray-600">Kilometraje inicial</label>
                <input
                type="number"
                value={kmInicio}
                onChange={(e) => setKmInicio(e.target.value)}
                disabled={kmInicialDeshabilitado}
                className="w-full border border-gray-300 rounded-lg p-2"
                />
            </div>

            <div>
                <label className="text-sm text-gray-600">Kilometraje actual</label>
                <input
                type="number"
                value={kmActual}
                onChange={(e) => setKmActual(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
                />
            </div>

            <div>
                <label className="text-sm text-gray-600">Litros cargados</label>
                <input
                type="number"
                value={litros}
                onChange={(e) => setLitros(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
                />
            </div>

            <button className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                Agregar Carga
            </button>
        </form>

        <div
            className="mt-8 text-center min-h-[50px]"
            dangerouslySetInnerHTML={{ __html: resultado }}
        ></div>
    </div>
    );
}