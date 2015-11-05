   angular.module("CalendarApp")
  .controller('homeCtrl',function($scope){
    $('ul.tabs').tabs();
	$scope.titulo = "home";
	$scope.materias = [];
	$scope.eventos = [];
	$scope.notas = [];
	$scope.cargar = function(){
		$scope.materias = [
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
	 	$scope.notas = [
	 		{
	 			titulo : "Cambiar !",
	 			desc : "Esta es una nota generica 1"
	 		},
	 		{
	 			titulo : "Cambiar CA",
	 			desc : "Esta es una nota generica 2"
	 		},
	 		{
	 			titulo : "Guardar !",
	 			desc : "Esta es una nota generica X"
	 		}
	 	];

	 	$scope.eventos = [
	 		{
	 			titulo : "Cambiar !",
	 			desc : "Esta es una nota generica 1"
	 		},
	 		{
	 			titulo : "Cambiar CA",
	 			desc : "Esta es una nota generica 2"
	 		},
	 		{
	 			titulo : "Guardar !",
	 			desc : "Esta es una nota generica X"
	 		}
	 	];
	 }
})
 .controller('materiasCtrl',function($scope){
 	$scope.titulo = "Materias";
 	$scope.materias = [
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
 })
 .controller("addMateriaCtrl",function($scope){
 	$scope.titulo = "Agregar Materia";
 	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  	});
 	$scope.change = function(dia){
	  	/*if($scope.materia.dia == true){
	  		$('#hlunes').show('fast');		
	  	}else{
	  		$('#hlunes').hide('fast');		
	  	}*/
 	};
  	$scope.guardarMateria = function(){
  		//alert($scope.materia.dlunes);
  	}
 })
 .controller('notasCtrl',function($scope){
 	$scope.titulo = "Notas";
 	$scope.notas = [
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
 })
 .controller("addNotaCtrl",function($scope){
 	$scope.titulo = "Agregar Nota";
 	$scope.guardarNota = function(){
 		alert("nota Guardada");
 	}
 })
 .controller('eventosCtrl',function($scope){
 	$scope.titulo = "Eventos";
 	$scope.eventos = [
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
 })
 .controller("addEventoCtrl",function($scope){
 	$scope.titulo = "Agregar Evento";
 	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  	});

  	$scope.guardarEvento = function(){
  		alert("Evento guardado");
  	}

 })
 .controller('miperfilCtrl',function($scope){
 	$scope.titulo = "Mi perfil";
 })
 .controller('materiaCtrl',function($scope,$routeParams){
 	$scope.titulo = "materiaaa";
 	$scope.cve = $routeParams.id;
 });