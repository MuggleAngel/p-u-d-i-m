$(document).ready(function(){
    $('.card-grp').click(function() {
        $('.card-list').toggleClass('visible');
    });

    graficoConquistas();
    grafico2sp();
});



function graficoConquistas(){

    var regiaoLabel = ["HumanFallFlat", "Minecraft", "Astroneer", "Knockout", "Spiritfarer"];
    var HumanFallFlat = 43;
    var Minecraft = 49;
    var Astroneer = 26;
    var Knockout = 21;
    var Spiritfarer = 16;
    // var casosAcumulados = [];

    var ctx = document.getElementById('graficoConquistas').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',
        data: {
            labels: regiaoLabel,
            datasets: [{ 
                data: [HumanFallFlat, Minecraft, Astroneer, Knockout, Spiritfarer],
                label: "graficoConquistas",
                borderColor: "#3e95cd",
                backgroundColor: ['rgb(0, 139, 139)','rgb(255, 99, 132)', 'rgb(255, 199, 132)', 'rgb(55, 99, 132)', 'rgb(33, 99, 132)'],
                fill: false
                }, { 

            }]
        },
    
        // Configuration options go here
        options: {
            title: {
                display: true,
                text: 'Algumas conquistas'
            }
        }
    });
}




function grafico2sp(){
    var data = ["Computador", "Xbox360", "XboxOne"];
    var casosAcumulados = [19, 3, 40];

    var ctx = document.getElementById('grafico2').getContext('2d');
    
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        data: {
            labels: data,
            datasets: [{ 
                data: casosAcumulados,
                label: "Quantidades",
                borderColor: "#3e95cd",
                backgroundColor: 'rgb(0, 139, 139)',
                }
            ]
        },
    
        // Configuration options go here
        options: {
            title: {
                display: true,
                text: 'Plataformas'
            }, 
            scales: {
                yAxes: [{
                  ticks: {
                    min: 0,
                    max: parseInt(casosAcumulados[casosAcumulados.length-1])+40,
                    stepSize: 10000
                  }
                }]
            }
        }
    });

}