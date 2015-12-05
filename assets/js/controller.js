   angular.module("CalendarApp")
  .controller('homeCtrl',function($scope,bdService){
    $('ul.tabs').tabs();
	$scope.titulo = "home";
	$scope.materias = [];
	$scope.eventos = [];
	$scope.notas = [];
	
	$scope.materias = bdService.getMaterias();
	$scope.notas = bdService.getNotas();
	$scope.eventos = bdService.getEventos();

})
 .controller('materiasCtrl',function($scope,bdService){
	$scope.materias ="";
	$scope.materias = bdService.getMaterias();
 })
 .controller("addMateriaCtrl",function($scope,bdService){
	$scope.titulo = "Agregar Materia";
	$('.time').lolliclock({autoclose:true});
	$scope.dias= bdService.getDias();
	console.log($scope.dias);
	
	$scope.guardarMateria = function(){
		var dato = bdService.putMateria($scope.materia);
	}
 })
 .controller('editMateriaCtrl',function($scope,bdService){
	$scope.titulo = "Editar Materia";
 })
 .controller('notasCtrl',function($scope,bdService){
	$scope.titulo = "Notas";
	$scope.notas="";
	$scope.notas = bdService.getNotas();
 })
 .controller("addNotaCtrl",function($scope,bdService){
	$scope.titulo = "Agregar Nota";
	$scope.guardarNota = function(){
		alert("nota Guardada");
	}
 })
 .controller('eventosCtrl',function($scope,bdService){
	$scope.titulo = "Eventos";
	$scope.eventos = ""; 
	$scope.eventos = bdService.getEventos();
 })
 .controller("addEventoCtrl",function($scope,bdService){
	$scope.titulo = "Agregar Evento";
	$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
	});

	$scope.guardarEvento = function(){
		alert("Evento guardado");
	}

 })
 .controller('miperfilCtrl',function($scope,bdService){
	$scope.titulo = "Mi perfil";
 })
 .controller('materiaCtrl',function($scope,bdService,$routeParams){
	$scope.titulo = "materia";
	$scope.cve = $routeParams.id;
 });