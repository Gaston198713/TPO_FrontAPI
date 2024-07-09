document.getElementById('get-data').addEventListener('click', fetchData);
document.getElementById('create-form').addEventListener('submit', createNewGame);

function fetchData() {
    fetch('http://127.0.0.1:5000/api/turnos/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);  // Verifica los datos en la consola

            // Ordenar los turnos por ID (ascendente)
            data.sort((a, b) => a.id_game - b.id_game);

            const table = document.createElement('table');
            table.innerHTML = `
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Genero</th>
                    <th>Banner</th>
                </tr>
            `;
            data.forEach(turno => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${turno.id_game}</td>
                    <td>${turno.nombre}</td>
                    <td>${turno.genero}</td>
                    <td>${turno.banner}</td>
                `;
                table.appendChild(row);
            });

            const output = document.getElementById('data-output');
            output.innerHTML = '';
            output.appendChild(table);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
            document.getElementById('data-output').innerHTML = 'Error al obtener los datos';
        });
}

function createNewGame(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const genero = document.getElementById('genero').value;
    const banner = document.getElementById('banner').value;

    const gameData = {
        nombre: nombre,
        genero: genero,
        banner: banner,
    };

    createTurno(gameData);
}