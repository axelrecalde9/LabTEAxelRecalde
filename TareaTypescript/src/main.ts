
import './style.css';
type Student = {
    id: number;
    name: string;
    scores: number[];
};

const json = '{"id":1,"name":"Hermione","scores":[95, 100, 98]}';
//json malo de prueba :const json = '{"id":1,"name":"Hermione","scores":[95, 100, 98]';
function safeParse(json: string): unknown {
    try {
        return JSON.parse(json);
    } catch (error) {
        return null;
    }
}

function isStudent(x: unknown): x is Student {
    if (typeof x !== "object" || x === null) {
        return false;
    }

    const estudiante = x as Record<string, unknown>;

    return (
        typeof estudiante.id === "number" &&
        typeof estudiante.name === "string" &&
        Array.isArray(estudiante.scores) &&
        estudiante.scores.every(score => typeof score === "number")
    );
}

function average(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    const suma = nums.reduce((total, nota) => total + nota, 0);

    return suma / nums.length;
}

const resultado = document.getElementById("resultado");

const estudiante = safeParse(json);

if (isStudent(estudiante)) {
    const titulo = document.createElement("h1");
    titulo.textContent = estudiante.name;

    const parrafo = document.createElement("p");
    parrafo.textContent = "Promedio: " + average(estudiante.scores).toFixed(2);

    resultado?.append(titulo, parrafo);
} else {
    const error = document.createElement("p");
    error.textContent = "Error: los datos del estudiante no son válidos.";

    resultado?.appendChild(error);
}
