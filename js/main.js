let myChart = document.getElementById('myChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.defaultFontColor = '#777';


    let massPopChart = new Chart(myChart, {
      type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Pest', 'Békés', 'Heves', 'Vas', 'Tolna', 'Somogy'],
        datasets:[{
          label:'Megyék',
          data:[
            617594,
            181045,
            153060,
            106519,
            105162,
            95072
          ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(40,180,131, 0.6)',
            'rgba(2,119,189, 0.6)',
            'rgba(255,112,67, 0.6)',
            'rgba(255,202,40, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(186,104,145, 0.6)',
            'rgba(240,98,146, 0.9)'
          ],
          borderWidth:1,
          borderColor:'#424242',
          hoverBorderWidth:1,
          hoverBorderColor:'#424242'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Földterületek száma Megyékben',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#424242'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });