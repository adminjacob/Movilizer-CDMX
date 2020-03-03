const stations = new Array(
    // Linea 1
    { name: "Observatorio", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 1 },
    { name: "Tacubaya", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 2 },
    { name: "Juanacatlan", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 3 },
    { name: "Chapultepec", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 4 },
    { name: "Sevilla", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 5 },
    { name: "Insurgentes", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 6 },
    { name: "Cuauhtémoc", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 7 },
    { name: "Balderas", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 8 },
    { name: "Salto del Agua", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 9 },
    { name: "Isabel la Católica", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 10 },
    { name: "Pino Suárez", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 11 },
    { name: "Merced", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 12 },
    { name: "Candelaria", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 13 },
    { name: "San Lazáro", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 14 },
    { name: "Moctezuma", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 15 },
    { name: "Balbuena", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 16 },
    { name: "Bouleard Puerto Aéreo", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 17 },
    { name: "Gómez Farias", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 18 },
    { name: "Zaragoza", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 19 },
    { name: "Pantitlán", idLine: 1, data: [ { way: "Observatorio" }, { way: "Pantitlán" } ], order: 20 },
    // Linea 2
    { name: "Cuatro Caminos", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 1 },
    { name: "Panteones", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 2 },
    { name: "Tacuba", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 3 },
    { name: "Cuitláhuac", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 4 },
    { name: "Popotla", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 5 },
    { name: "Colegio Militar", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 6 },
    { name: "Normal", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 7 },
    { name: "San Cosme", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 8 },
    { name: "Revolución", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 9 },
    { name: "Hidalgo", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 10 },
    { name: "Bellas Artes", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 11 },
    { name: "Allende", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 12 },
    { name: "Zócalo", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 13 },
    { name: "Pino Suárez", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 14 },
    { name: "San Antonio Abad", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 15 },
    { name: "Chabacano", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 16 },
    { name: "Viaducto", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 17 },
    { name: "Xola", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 18 },
    { name: "Villa de Cortés", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 19 },
    { name: "Nativitas", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 20 },
    { name: "Portales", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 21 },
    { name: "Ermita", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 22 },
    { name: "General Anaya", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 23 },
    { name: "Tasqueña", idLine: 2, data: [ { way: "Cuatro Caminos" }, { way: "Tasqueña" } ], order: 24 },
    // Linea 3
    { name: "Indios Verdes", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 1 },
    { name: "Deportivo 18 de Marzo", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 2 },
    { name: "Potrero", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 3 },
    { name: "La Raza", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 4 },
    { name: "Tlatelolco", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 5 },
    { name: "Guerrero", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 6 },
    { name: "Hidalgo", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 7 },
    { name: "Juárez", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 8 },
    { name: "Balderas", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 9 },
    { name: "Niños Héroes", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 10 },
    { name: "Hospital General", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 11 },
    { name: "Centro Médico", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 12 },
    { name: "Etiopía/ Plaza de la Transparencia", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 13 },
    { name: "Eugenia", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 14 },
    { name: "División del Norte", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 15 },
    { name: "Zapata", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 16 },
    { name: "Coyoacán", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 17 },
    { name: "Viveros/ Derechos Humanos", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 18 },
    { name: "Miguel Ángel del Quevedo", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 19 },
    { name: "Copilco", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 20 },
    { name: "Universidad", idLine: 3, data: [ { way: "Indios Verdes" }, { way: "Universidad" } ], order: 21 },
    // Linea 4
    { name: "Martín Carrera", idLine: 4, data: [ { way: "Santa Anita" }, { way: "Martín Carrera" } ], order: 1 },
    { name: "Talismán", idLine: 4, data: [ { way: "Santa Anita" }, { way: "Martín Carrera" } ], order: 2 },
    { name: "Bondojito", idLine: 4, data: [ { way: "Santa Anita" }, { way: "Martín Carrera" } ], order: 3 },
    { name: "Consulado", idLine: 4, data: [ { way: "Santa Anita" }, { way: "Martín Carrera" } ], order: 4 },
    { name: "Canal del Norte", idLine: 4, data: [ { way: "Santa Anita" }, { way: "Martín Carrera" } ], order: 5 },
    { name: "Morelos", idLine: 4, data: [ { way: "Santa Anita" }, { way: "Martín Carrera" } ], order: 6 },
    { name: "Candelaria", idLine: 4, data: [ { way: "Santa Anita" }, { way: "Martín Carrera" } ], order: 7 },
    { name: "Fray Servando", idLine: 4, data: [ { way: "Santa Anita" }, { way: "Martín Carrera" } ], order: 8 },
    { name: "Jamaica", idLine: 4, data: [ { way: "Santa Anita" }, { way: "Martín Carrera" } ], order: 9 },
    { name: "Santa Anita", idLine: 4, data: [ { way: "Santa Anita" }, { way: "Martín Carrera" } ], order: 10 },
    // Linea 5
    { name: "Pantitlán", idLine: 5, data: [ { way: "Pantitlán" }, { way: "Politécnico" } ], order: 1 },
    { name: "Hangares", idLine: 5, data: [ { way: "Pantitlán" }, { way: "Politécnico" } ], order: 2 },
    { name: "Terminal Aérea", idLine: 5, data: [ { way: "Pantitlán" }, { way: "Politécnico" } ], order: 3 },
    { name: "Oceanía", idLine: 5, data: [ { way: "Pantitlán" }, { way: "Politécnico" } ], order: 4 },
    { name: "Aragón", idLine: 5, data: [ { way: "Pantitlán" }, { way: "Politécnico" } ], order: 5 },
    { name: "Eduardo Molina", idLine: 5, data: [ { way: "Pantitlán" }, { way: "Politécnico" } ], order: 6 },
    { name: "Consulado", idLine: 5, data: [ { way: "Pantitlán" }, { way: "Politécnico" } ], order: 7 },
    { name: "Valle Gómez", idLine: 5, data: [ { way: "Pantitlán" }, { way: "Politécnico" } ], order: 8 },
    { name: "Misterios", idLine: 5, data: [ { way: "Pantitlán" }, { way: "Politécnico" } ], order: 9 },
    { name: "La Raza", idLine: 5, data: [ { way: "Pantitlán" }, { way: "Politécnico" } ], order: 10 },
    { name: "Autobúses del Norte", idLine: 5, data: [ { way: "Pantitlán" }, { way: "Politécnico" } ], order: 11 },
    { name: "Instituto del Petróleo", idLine: 5, data: [ { way: "Pantitlán" }, { way: "Politécnico" } ], order: 12 },
    { name: "Politécnico", idLine: 5, data: [ { way: "Pantitlán" }, { way: "Politécnico" } ], order: 13 },
    // Linea 6
    { name: "El Rosario", idLine: 6, data: [ { way: "El Rosario" }, { way: "Martín Carrera" } ], order: 1 },
    { name: "Tezozómoc", idLine: 6, data: [ { way: "El Rosario" }, { way: "Martín Carrera" } ], order: 2 },
    { name: "Azcapotzalco", idLine: 6, data: [ { way: "El Rosario" }, { way: "Martín Carrera" } ], order: 3 },
    { name: "Ferrería/ Arena Ciudad de México", idLine: 6, data: [ { way: "El Rosario" }, { way: "Martín Carrera" } ], order: 4 },
    { name: "Norte 45", idLine: 6, data: [ { way: "El Rosario" }, { way: "Martín Carrera" } ], order: 5 },
    { name: "Vallejo", idLine: 6, data: [ { way: "El Rosario" }, { way: "Martín Carrera" } ], order: 6 },
    { name: "Instituto del Petróleo", idLine: 6, data: [ { way: "El Rosario" }, { way: "Martín Carrera" } ], order: 7 },
    { name: "Lindavista", idLine: 6, data: [ { way: "El Rosario" }, { way: "Martín Carrera" } ], order: 8 },
    { name: "Deportivo 18 de Marzo", idLine: 6, data: [ { way: "El Rosario" }, { way: "Martín Carrera" } ], order: 9 },
    { name: "La Villa/ Basilica", idLine: 6, data: [ { way: "El Rosario" }, { way: "Martín Carrera" } ], order: 10 },
    { name: "Martín Carrera", idLine: 6, data: [ { way: "El Rosario" }, { way: "Martín Carrera" } ], order: 11 },
    // Linea 7
    { name: "El Rosario", idLine: 7, data: [ { way: "El Rosario" }, { way: "Barranca del Muerto" } ], order: 1 },
    { name: "Aquiles Serdán", idLine: 7, data: [ { way: "El Rosario" }, { way: "Barranca del Muerto" } ], order: 2 },
    { name: "Camarones", idLine: 7, data: [ { way: "El Rosario" }, { way: "Barranca del Muerto" } ], order: 3 },
    { name: "Refinería", idLine: 7, data: [ { way: "El Rosario" }, { way: "Barranca del Muerto" } ], order: 4 },
    { name: "Tacuba", idLine: 7, data: [ { way: "El Rosario" }, { way: "Barranca del Muerto" } ], order: 5 },
    { name: "San Joaquín", idLine: 7, data: [ { way: "El Rosario" }, { way: "Barranca del Muerto" } ], order: 6 },
    { name: "Polanco", idLine: 7, data: [ { way: "El Rosario" }, { way: "Barranca del Muerto" } ], order: 7 },
    { name: "Auditorio", idLine: 7, data: [ { way: "El Rosario" }, { way: "Barranca del Muerto" } ], order: 8 },
    { name: "Constituyentes", idLine: 7, data: [ { way: "El Rosario" }, { way: "Barranca del Muerto" } ], order: 9 },
    { name: "Tacubaya", idLine: 7, data: [ { way: "El Rosario" }, { way: "Barranca del Muerto" } ], order: 10 },
    { name: "San Pedro de los Pinos", idLine: 7, data: [ { way: "El Rosario" }, { way: "Barranca del Muerto" } ], order: 11 },
    { name: "San Antonio", idLine: 7, data: [ { way: "El Rosario" }, { way: "Barranca del Muerto" } ], order: 12 },
    { name: "Mixcoac", idLine: 7, data: [ { way: "El Rosario" }, { way: "Barranca del Muerto" } ], order: 13 },
    { name: "Barranca del Muerto", idLine: 7, data: [ { way: "El Rosario" }, { way: "Barranca del Muerto" } ], order: 14 },
    // Linea 8
    { name: "Garibaldi/ Lagunilla", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 1 },
    { name: "Bellas Artes", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 2 },
    { name: "San Juan de Letrán", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 3 },
    { name: "Salto del Agua", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 4 },
    { name: "Doctores", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 5 },
    { name: "Obrera", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 6 },
    { name: "Chabacano", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 7 },
    { name: "La Viga", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 8 },
    { name: "Santa Anita", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 9 },
    { name: "Coyuya", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 10 },
    { name: "Iztacalco", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 11 },
    { name: "Apatlaco", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 12 },
    { name: "Aculco", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 13 },
    { name: "Escuadrón 201", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 14 },
    { name: "Atlalilco", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 15 },
    { name: "Iztapalapa", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 16 },
    { name: "Cerro de la Estrella", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 17 },
    { name: "UAM-I", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 18 },
    { name: "Constitución de 1917", idLine: 8, data: [ { way: "Garibaldi/ Lagunilla" }, { way: "Constitución de 1917" } ], order: 19 },
    // Linea 9
    { name: "Tacubaya", idLine: 9, data: [ { way: "Pantitlán" }, { way: "Tacubaya" } ], order: 1 },
    { name: "Patriotismo", idLine: 9, data: [ { way: "Pantitlán" }, { way: "Tacubaya" } ], order: 2 },
    { name: "Chilpancingo", idLine: 9, data: [ { way: "Pantitlán" }, { way: "Tacubaya" } ], order: 3 },
    { name: "Centro Médico", idLine: 9, data: [ { way: "Pantitlán" }, { way: "Tacubaya" } ], order: 4 },
    { name: "Lázaro Cárdenas", idLine: 9, data: [ { way: "Pantitlán" }, { way: "Tacubaya" } ], order: 5 },
    { name: "Chabacano", idLine: 9, data: [ { way: "Pantitlán" }, { way: "Tacubaya" } ], order: 6 },
    { name: "Jamaica", idLine: 9, data: [ { way: "Pantitlán" }, { way: "Tacubaya" } ], order: 7 },
    { name: "Mixiuhca", idLine: 9, data: [ { way: "Pantitlán" }, { way: "Tacubaya" } ], order: 8 },
    { name: "Velódromo", idLine: 9, data: [ { way: "Pantitlán" }, { way: "Tacubaya" } ], order: 9 },
    { name: "Ciudad Deportiva", idLine: 9, data: [ { way: "Pantitlán" }, { way: "Tacubaya" } ], order: 10 },
    { name: "Puebla", idLine: 9, data: [ { way: "Pantitlán" }, { way: "Tacubaya" } ], order: 11 },
    { name: "Pantitlán", idLine: 9, data: [ { way: "Pantitlán" }, { way: "Tacubaya" } ], order: 12 },
    // Linea A
    { name: "Pantitlán", idLine: 10, data: [ { way: "Pantitlán" }, { way: "La Paz" } ], order: 1 },
    { name: "Agrícola Oriental", idLine: 10, data: [ { way: "Pantitlán" }, { way: "La Paz" } ], order: 2 },
    { name: "Canal de San Juan", idLine: 10, data: [ { way: "Pantitlán" }, { way: "La Paz" } ], order: 3 },
    { name: "Tepalcates", idLine: 10, data: [ { way: "Pantitlán" }, { way: "La Paz" } ], order: 4 },
    { name: "Guelatao", idLine: 10, data: [ { way: "Pantitlán" }, { way: "La Paz" } ], order: 5 },
    { name: "Peñon Viejo", idLine: 10, data: [ { way: "Pantitlán" }, { way: "La Paz" } ], order: 6 },
    { name: "Acatitla", idLine: 10, data: [ { way: "Pantitlán" }, { way: "La Paz" } ], order: 7 },
    { name: "Santa Marta", idLine: 10, data: [ { way: "Pantitlán" }, { way: "La Paz" } ], order: 8 },
    { name: "Los Reyes", idLine: 10, data: [ { way: "Pantitlán" }, { way: "La Paz" } ], order: 9 },
    { name: "La Paz", idLine: 10, data: [ { way: "Pantitlán" }, { way: "La Paz" } ], order: 10 },
    // Linea B
    { name: "Ciudad Azteca", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 1 },
    { name: "Plaza Aragón", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 2 },
    { name: "Olimpica", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 3 },
    { name: "Ecatepec", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 4 },
    { name: "Muzquiz", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 4 },
    { name: "Rio de los Remedios", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 6 },
    { name: "Impulsora", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 7 },
    { name: "Nezahualcóyotl", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 8 },
    { name: "Villa de Aragón", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 9 },
    { name: "Bosque de Aragón", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 10 },
    { name: "Deportivo Oceanía", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 11 },
    { name: "Oceanía", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 12 },
    { name: "Romero Rubio", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 13 },
    { name: "Ricardo FLores Magón", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 14 },
    { name: "San Lázaro", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 15 },
    { name: "Morelos", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 16 },
    { name: "Tepito", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 17 },
    { name: "Lagunilla", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 18 },
    { name: "Garibaldi/ Lagunilla", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 19 },
    { name: "Guerrero", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 20 },
    { name: "Buenavista", idLine: 11, data: [ { way: "Ciudad Azteca" }, { way: "Buenavista" } ], order: 21 },
    // Linea 12
    { name: "Mixcoac", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 1 },
    { name: "Insurgentes Sur", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 2 },
    { name: "Hospital 20 de Noviembre", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 3 },
    { name: "Zapata", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 4 },
    { name: "Parque de los Venados", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 5 },
    { name: "Eje Central", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 6 },
    { name: "Ermita", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 7 },
    { name: "Mexicaltzingo", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 8 },
    { name: "Atlalilco", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 9 },
    { name: "Culhuacán", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 10 },
    { name: "San Andrés Tomatlán", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 11 },
    { name: "Lomas Estrella", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 12 },
    { name: "Calle 11", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 13 },
    { name: "Periférico Oriente", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 14 },
    { name: "Tezonco", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 15 },
    { name: "Olivos", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 16 },
    { name: "Nopalera", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 17 },
    { name: "Zapotitlán", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 18 },
    { name: "Tlaltenco", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 19 },
    { name: "Tláhuac", idLine: 12, data: [ { way: "Tláhuac" }, { way: "Mixcoac" } ], order: 20 }
    );
module.exports = stations;