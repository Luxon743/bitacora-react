# 🚗 Registro de Viajes - Calculadora de Consumo

Aplicación web para registrar cargas de combustible y calcular el consumo de un vehículo. Este proyecto nació originalmente en Vanilla JS y fue migrado a **React + TypeScript** para implementar una arquitectura moderna basada en componentes.

## 📌 Descripción
Permite ingresar kilometraje y litros cargados, guardar un historial de cargas y calcular el consumo promedio del viaje. Los datos se almacenan en el navegador mediante `localStorage`, por lo que no se pierden al recargar la página.

## ⚙️ Tecnologías
* React
* TypeScript
* Tailwind CSS
* Vite

## 🚀 Funcionalidades
* Agregar cargas de combustible
* Visualizar historial de cargas
* Calcular consumo promedio (L/100km)
* Persistencia de datos con LocalStorage
* Reiniciar viaje

## 🖥️ Uso
1. Ingresar kilometraje y litros
2. Agregar cargas
3. Calcular el consumo del viaje

## 🌐 Demo
Podés probar la aplicación desde el siguiente enlace:
👉 https://luxon743.github.io/bitacora-react/

## 📄 Notas
Este proyecto fue desarrollado con fines educativos como parte de una práctica universitaria. 

En esta versión refactorizada, el enfoque principal está en aplicar buenas prácticas de desarrollo moderno con React:
* **Modularización:** Separación de la interfaz en componentes independientes (`Formulario` y `Historial`) para tener un código más limpio y escalable.
* **Flujo de Datos:** Implementación de hooks (`useState` y `useEffect`) para gestionar el estado de la aplicación y la persistencia en LocalStorage, dejando atrás la manipulación manual del DOM.
* **Tipado:** Uso de TypeScript para estructurar mejor la información que viaja entre los componentes.
