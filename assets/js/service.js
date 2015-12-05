angular.module("CalendarApp")
.service("bdService",function(){
  this.dataset = [];
  this.dias = [];
  this.db = openDatabase("AppCalendar", "1.0", "App Calendario", 200000);
/**************
  MATERIAS
**************/
///Guardar materia
 this.putMateria = function(materia){
  alert("Guardado!!");
 };

 this.getMaterias = function(){
  dataset = [
      {
        nombreM: "Matematicas",
        hora : "3:00 pm - 5:00pm",
        id: 1
      },
      {
        nombreM: "Ingles",
        hora : "3:00 pm - 5:00pm",
        id: 2
      },
      {
        nombreM: "Etica",
        hora : "3:00 pm - 5:00pm",
        id: 3
      }
    ];
    return dataset;
 };


///////////////Notas
this.getNotas = function(){
  dataset = [
    {
      titulo : "Cambiar !",
      desc : "Esta es una nota generica 1",
      id: "1"
    },
    {
      titulo : "Cambiar CA",
      desc : "Esta es una nota generica 2",
      id: "2"
    },
    {
      titulo : "Guardar !",
      desc : "Esta es una nota generica X",
      id: "3"
    }
  ];
  return dataset;
};


////////////////Eventos
this.getEventos = function(){
  dataset =  [
    {
      titulo : "Evento  !",
      desc : "Esta es una nota generica 1"
    },
    {
      titulo : "Evento  CA",
      desc : "Esta es una nota generica 2"
    },
    {
      titulo : "Evento  !",
      desc : "Esta es una nota generica 1"
    },
    {
      titulo : "Evento  CA",
      desc : "Esta es una nota generica 2"
    },
    {
      titulo : "Evento  !",
      desc : "Esta es una nota generica 1"
    },
    {
      titulo : "Evento  CA",
      desc : "Esta es una nota generica 2"
    },
    {
      titulo : "Evento  !",
      desc : "Esta es una nota generica X"
    }
  ]; 
  return dataset;
};


/////////Dias
this.getDias =  function(){

  db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM dias", [], function (tx, result) {
            dias = result.rows;
        });
    });
  return dias;
  };



 })////Fin service
