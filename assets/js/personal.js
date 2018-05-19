/*Boton +/-*/  
  function show(id) {
   obj = document.getElementById('plusboton1'+id);
   obj.style.display = (obj.style.display=='none') ? 'block' : 'none';
   obj2 = document.getElementById('plusboton2'+id);
   obj2.style.display = (obj.style.display=='none') ? 'block' : 'none';
}

/*Función para imprimir*/
  function printDiv(nombreDiv) {
     var contenido= document.getElementById(nombreDiv).innerHTML;
     var contenidoOriginal= document.body.innerHTML;

     document.body.innerHTML = contenido;

     window.print();

     document.body.innerHTML = contenidoOriginal;
   }

/*Generar PDF*/
function HTMLtoPDF(){
var pdf = new jsPDF('p', 'pt', 'letter');
source = $('.HTMLtoPDF')[0];
specialElementHandlers = {
  '#bypassme': function(element, renderer){
    return true
  }
}
margins = {
    top: 50,
    left: 60,
    width: 545
  };
pdf.fromHTML(
    source // HTML string or DOM elem ref.
    , margins.left // x coord
    , margins.top // y coord
    , {
      'width': margins.width // max width of content on PDF
      , 'elementHandlers': specialElementHandlers
    },
    function (dispose) {
      // dispose: object with X, Y of the last line add to the PDF
      //          this allow the insertion of new lines after html
        pdf.save('informepdf.pdf');
      }
  )   
}

/*Grafica de torta*/
$(document).ready(function(){
    var datos = {
      type: "pie",
      data : {
        datasets :[{
          data : [
            5,
            10,
            40,
            12,
            23,
          ],
          backgroundColor: [
            "#030544",
            "#0c12d8",
            "#1855a0",
            "#297fe8",
            "#92bef5",
          ],
        }],
        labels : [
          "Datos 1",
          "Datos 2",
          "Datos 3",
          "Datos 4",
          "Datos 5",
        ]
      },
      options : {
        responsive : true,
      }
    };

    var canvas = document.getElementById('chart1').getContext('2d');
    window.pie = new Chart(canvas, datos);

    setInterval(function(){
      datos.data.datasets.splice(0);
      var newData = {
        backgroundColor : [
            "#030544",
            "#0c12d8",
            "#1855a0",
            "#297fe8",
            "#92bef5",
        ],
        data : [getRandom(), getRandom(), getRandom(), getRandom(), getRandom()]
      };

      datos.data.datasets.push(newData);

      window.pie.update();

    }, 5000);



    function getRandom(){
      return Math.round(Math.random() * 100);
    }


  });

/*Grafica de barras*/
  $(document).ready(function (){
    
    var datos = {
      labels : ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
      datasets : [{
        label : "Datos 1",
        backgroundColor : "rgba(220,220,220,0.5)",
        data : [4, 12, 9, 7, 5]
      },
      {

        label : "Datos 2",
        backgroundColor : "rgba(151,187,205,0.5)",
        data : [10,7,-5,6,5]
      }
      ]
    };


    var canvas = document.getElementById('chart').getContext('2d');
    window.bar = new Chart(canvas, {
      type : "bar",
      data : datos,
      options : {
        elements : {
          rectangle : {
            borderWidth : 1,
            borderColor : "rgb(0,75,126)",
            borderSkipped : 'bottom'
          }
        },
        responsive : true,
        title : {
          display : true,
          text : "Grafico de barras"
        }
      }
    });

    setInterval(function(){
      var newData = [
        [getRandom(),getRandom(),getRandom(),getRandom()*-1,getRandom()],
        [getRandom(),getRandom(),getRandom(),getRandom(),getRandom()],
        [getRandom(),getRandom(),getRandom(),getRandom(),getRandom()],        
      ];

      $.each(datos.datasets, function(i, dataset){
        dataset.data = newData[i];
      });
      window.bar.update();
    }, 5000);

    


    function getRandom(){
      return Math.round(Math.random() * 100);
    }


  });