/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Lucas García Sánchez",
				Photo: "guiri.png",
				Quote: "Si la vida te da limones, haz una limonada",
				Age: 25,
				Occupation: "Estudiante de Fotografía",
				Family: "Soltero",
				Location: "Galicia, Vigo",
				Character: "Viajar y hacer fotografías",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Disfrutar del tiempo libre, viajar", "Tomarse unos descansos tras los estudios", "Conocer la cultura Mediterránea", "Poner en práctica sus estudios"],
				Frustrations: ["No es capaz de orientarse", "Suele ser muy olvidadizo", "Le preocupa su falta de ingresos"],
				Bio: "Nacido en Vigo, nunca ha viajado fuera de España y rara veces fuera de Galicia. Siempre ha querido conocer mejor otras zonas de España, como el Mediterráneo,"+
					 " pero nunca ha tenido la oportunidad de llevarlo a cabo por falta de dinero. Recientemente, acaba de terminar sus estudios, y con el dinero que tiene ahorrado con la becas, decide tomarse un año sabático para poder realizar todo"+
					 " tipo de actividades con gente con la que comparta gustos y aficiones.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Puesto que le encanta el buen tiempo y la costa, ha decidido explorar el Mediterráneo y realizar fotografías",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Natalia Montero Vargas",
				Photo: "sofia.png",
				Quote: "El amor abre el paréntesis, el matrimonio lo cierra",
				Age: 34,
				Occupation: "Forma parte de un equipo de directivos",
				Family: "2 divorcios con 2 hijos",
				Location: "Madrid",
				Character: "Simpática, trabajadora y educada",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Visitar monumentos históricos", "Tener éxito en el proyecto en el que está trabajando", "Ofrecer a sus hijos una buena educación"],
				Frustrations: ["Falta de tiempo ", "Amores del pasado", "Ansiendad por su trabajo"],
				Bio: "Nació en Madrid y tras graduarse en en la Complutense, Natalia trabaja actualmente"+
				" en un equipo de directivos que desarrolla aplicaciones que gestiona actividades en grupo. Aficionada al arte y a la historia, ha tenido una vida sentimental complicada"
				+" y está al cuidado de 2 hijos con 6 y 9 años, de padres diferentes. Sin embargo, no ha perdido la esperanza en el amor verdadero",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 2 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 5 }
				], 
                Contextos:   "Natalia lleva unos meses trabajando duro y decide viajar a Granada con sus hijos para despejarse y visitar a la Alhambra" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 1 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])