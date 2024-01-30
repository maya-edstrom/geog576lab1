
const headers = {
    'Accept':'application/json'
  };
  
  fetch('https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/arcgis/terrain',
  {
    method: 'GET',
  
    headers: headers
  })
  .then(function(res) {
      return res.json();
  }).then(function(body) {
      console.log(body);
  });
  