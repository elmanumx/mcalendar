/////Declarando sentencias para crear la base de datos!

var sqlMaterias = "CREATE TABLE IF NOT EXISTS materias (cve_materia INTEGER PRIMARY KEY AUTOINCREMENT, nombre_materia TEXT, maestro TEXT)";
var sqlDias = "CREATE TABLE IF NOT EXISTS dias (cve_dia INTEGER PRIMARY KEY AUTOINCREMENT, nombre_dia TEXT, status_dia TEXT)";
var sqlHorario = "CREATE TABLE IF NOT EXISTS horario (cve_horario INTEGER PRIMARY KEY AUTOINCREMENT,cve_materia_ho TEXT, cve_dia_ho TEXT, hi_horario TEXT, hf_horario TEXT,  FOREIGN KEY(cve_materia_ho) REFERENCES materias(cve_materia), FOREIGN KEY(cve_dia_ho) REFERENCES dias(cve_dia))";
var sqlNotas = "CREATE TABLE IF NOT EXISTS notas (cve_nota INTEGER PRIMARY KEY AUTOINCREMENT, cve_materia_no TEXT, titulo_nota TEXT, asunto TEXT, FOREIGN KEY(cve_materia_no) REFERENCES materias(cve_materia))";
var sqlEventos = "CREATE TABLE IF NOT EXISTS eventos (cve_evento INTEGER PRIMARY KEY AUTOINCREMENT, titulo_evento TEXT, desc_evento TEXT, fecha_evento TEXT)";
var sqlGeneral = "CREATE TABLE IF NOT EXISTS general (cve_usuario INTEGER PRIMARY KEY AUTOINCREMENT, mail TEXT, app_usuario TEXT, apm_usuario TEXT, nombre_usuario TEXT)";

/////Consultas a utilizar
var selectDias = "SELECT * FROM dias";
var insertDias = "INSERT INTO dias (nombre_dia, status_dia) VALUES (?, ?)";


////Variables para la BD
var db = openDatabase("AppCalendar", "1.0", "App Calendario", 200000);  // Open SQLite Database
var dataset;
var DataType;


function initialBD() {
    console.debug('called initialBD()');

    try {
        if (!window.openDatabase) {
            alert('not supported');
        } else {
            CrearTablas();
        }
    } catch(e) {
        if (e == 2) {
            alert('Version de BD invalida');
        } else {
            alert('Error ' + e);
        }
        return;
    }
}

function CrearTablas(){
	console.debug('called CrearTablas()');
    
    db.transaction(function (tx) { tx.executeSql(sqlMaterias, [], MostrarDatos, onError); });
    db.transaction(function (tx) { tx.executeSql(sqlDias, [], MostrarDatos, onError); });
    db.transaction(function (tx) { tx.executeSql(sqlHorario, [], MostrarDatos, onError); });
    db.transaction(function (tx) { tx.executeSql(sqlNotas, [], MostrarDatos, onError); });
    db.transaction(function (tx) { tx.executeSql(sqlEventos, [], MostrarDatos, onError); });
    db.transaction(function (tx) { tx.executeSql(sqlGeneral, [], MostrarDatos, onError); });

} 

function MostrarDatos(){
	console.log("Mostrar Datos");
}

function onError(tx, error) // Function for Hendeling Error...
 
{
    alert(error.message);
}

function obtenerDias(){
	db.transaction(function (tx) {
        tx.executeSql(selectDias, [], function (tx, result) {
        	dataset = result.rows;
        });
    });
}

initialBD();

function checar(){
	obtenerDias();
}
