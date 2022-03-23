/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Lucas García Sánchez",
                Photo: "guiri.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Deseo por conocer la cultura Mediterráneo y ha encontrado una buena oferta de BlaBlaCar a Granada",
                touch1: "Móvil",
                feel1: "5",
                con1: "No sabe si dispone de suficiente dinero para todo lo que quiere hacer",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en Internet ofertas de alojamiento",
                touch2: "Móvil",
                feel2: "2",
                con2: "Los hoteles convenciales son demasiados caros",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide planificar su alojamiento en un hostel",
                touch3: "Móvil",
                feel3: "3",
                con3: "Le preocupa la experiencia puesto que nunca ha estado en un hostel",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encuentra en distintos comparadores numerosas ofertas de hosteles de Granada",
                touch4: "Móvil",
                feel4: "4",
                con4: "Los precios son aseguibles, ofrecen informaciones claras, imágeneres relevantes y hay buenas valoraciones",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra varias opciones que encajan con sus preferencias",
                touch5: "Móvil",
                feel5: "4",
                con5: "Revisa las actividades ofrecidas y las localizaciones de estos hosteles",
                ima5: "cartoon-writting2.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finalmente se decanta por 4UHostel por su cercanía al centro de la ciudad",
                touch6: "Móvil",
                feel6: "4",
                con6: "Le preocupa tener que compartir habitación con gente desconocida pero a su vez le entusiasma la posibilidad de conocer gente interesante",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Natalia Montero Vargas",
                Photo: "sofia.png",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con sus hijos, despejarse de su trabajo y conocer monumentos que no había visitado",
                touch1: "Agenda",
                feel1: "3",
                con1: "Tras escuchar sobre el viaje de un compañero a Granada, decide visitar el mismo destino",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Decide acudir a un amigo que trabaja en una agencia de viajes para que le recomiende planes",
                touch2: "Amigo de confianza",
                feel2: "4",
                con2: "Durante la conversación, el amigo le recomienda realizar el viaje con coche ya que tendría mayor libertad debido a los niños",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Busca por Internet lugares de alojamiento",
                touch3: "Ordenador",
                feel3: "3",
                con3: "No le convence los hoteles modernos, prefiere algun lugar sumergida en la cultura local",
                ima3: "cartoon-PChard.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Observa que hay hosteles que son construcciones antiguas restauradas y con varios siglos de antiguedad",
                touch4: "Ordenador",
                feel4: "3",
                con4: "Le preocupa el nivel de limpieza de las instalaciones y el nivel de comodidad sobre todo para sus hijos",
                ima4: "cartoon-PCSurprised.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Las reseñas y la construcción de 4UHostel le convece",
                touch5: "Ordenador",
                feel5: "3",
                con5: "Sigue teniendo sus dudas principalmente porque no sabe si sus hijos van a disfrutar de la estancia",
                ima5: "cartoon-PCtyping.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Procede a reservar en el hostel en cuestión",
                touch6: "Ordenador (reserva)",
                feel6: "2",
                con6: "Intenta reservar pero se da cuenta de que ho hay habitaciones para 3 personas y tendrá que pedir una habitación privada para 4",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



