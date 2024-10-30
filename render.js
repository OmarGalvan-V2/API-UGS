const $ = require('jquery');
$('#fetch-data').on('click', () => {
    const output = $('#output');
    output.text('Consultando...');
    
    const starttime = $('#startdate').val();
    const endtime = $('#enddate').val();
    

    if (!starttime || !endtime) {
        output.text('Por favor, ingrese ambas fechas.');
        return;
    }
  
    // Parámetros adicionales
    const minlatitude = 10;          
    const maxlatitude = 50;          
    const minlongitude = -130;       
    const maxlongitude = -60;        
    const minmagnitude = 4.5;        
  
    $.ajax({
      url: 'https://earthquake.usgs.gov/fdsnws/event/1/query',
      method: 'GET',
      data: {
        format: 'geojson',
        starttime: starttime,
        endtime: endtime,
        minlatitude: minlatitude,
        maxlatitude: maxlatitude,
        minlongitude: minlongitude,
        maxlongitude: maxlongitude,
        minmagnitude: minmagnitude
      },
      success: (response) => {
        output.text(JSON.stringify(response, null, 2));
      },
      error: (xhr, status, error) => {
        output.text(`Error: ${error}`);
      }
    });
});
