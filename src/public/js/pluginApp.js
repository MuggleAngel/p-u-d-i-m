$(document).ready(function(){
    $('.card-grp').click(function() {
        $('.card-list').toggleClass('visible');
    });

    graficoConquistas();
    grafico2sp();
});



function graficoConquistas(){

    var regiaoLabel = ["Prata", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"];
    var Prata = 23;
    var Nordeste = 3;
    var Sudeste = 67;
    var Sul = 21;
    var Oeste = 45;
    // var casosAcumulados = [];

    var ctx = document.getElementById('graficoConquistas').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',
        data: {
            labels: regiaoLabel,
            datasets: [{ 
                data: [Prata, Nordeste, Sudeste, Sul, Oeste],
                label: "Casos notificados",
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
                text: 'CASOS E ÓBTOS POR ESTADO'
            }
        }
    });
}




function grafico2sp(){
    var data = ["Acao", "RPG", "Corrida"];
    var casosAcumulados = [23,44, 77];

    var ctx = document.getElementById('grafico2').getContext('2d');
    
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        data: {
            labels: data,
            datasets: [{ 
                data: casosAcumulados,
                label: "Casos notificados",
                borderColor: "#3e95cd",
                backgroundColor: 'rgb(0, 139, 139)',
                }
            ]
        },
    
        // Configuration options go here
        options: {
            title: {
                display: true,
                text: 'CASOS E ÓBITOS POR ESTADO'
            }, 
            scales: {
                yAxes: [{
                  ticks: {
                    min: 0,
                    max: parseInt(casosAcumulados[casosAcumulados.length-1])+500,
                    stepSize: 10000
                  }
                }]
            }
        }
    });

}