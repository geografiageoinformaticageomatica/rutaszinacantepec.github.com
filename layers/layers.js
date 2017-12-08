var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_delegacionesDF0 = new ol.format.GeoJSON();
var features_delegacionesDF0 = format_delegacionesDF0.readFeatures(json_delegacionesDF0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delegacionesDF0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_delegacionesDF0.addFeatures(features_delegacionesDF0);var lyr_delegacionesDF0 = new ol.layer.Vector({
                source:jsonSource_delegacionesDF0, 
                style: style_delegacionesDF0,
                title: "delegacionesDF"
            });var format_XOC1 = new ol.format.GeoJSON();
var features_XOC1 = format_XOC1.readFeatures(json_XOC1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XOC1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_XOC1.addFeatures(features_XOC1);var lyr_XOC1 = new ol.layer.Vector({
                source:jsonSource_XOC1, 
                style: style_XOC1,
                title: "XOC"
            });

lyr_delegacionesDF0.setVisible(true);lyr_XOC1.setVisible(true);
var layersList = [baseLayer,lyr_delegacionesDF0,lyr_XOC1];
lyr_delegacionesDF0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_MUN': 'NOM_MUN', 'Clave': 'Clave', 'Nombre': 'Nombre', 'Aprov': 'Aprov', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_XOC1.set('fieldAliases', {'CVEASEN': 'CVEASEN', 'TIPO_NOM': 'TIPO_NOM', 'delegacion': 'delegacion', 'NOMASEN': 'NOMASEN', });
lyr_delegacionesDF0.set('fieldImages', {'OBJECTID': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'Clave': 'TextEdit', 'Nombre': 'TextEdit', 'Aprov': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_XOC1.set('fieldImages', {'CVEASEN': 'TextEdit', 'TIPO_NOM': 'TextEdit', 'delegacion': 'TextEdit', 'NOMASEN': 'TextEdit', });
lyr_delegacionesDF0.set('fieldLabels', {'OBJECTID': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOM_MUN': 'no label', 'Clave': 'no label', 'Nombre': 'no label', 'Aprov': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_XOC1.set('fieldLabels', {'CVEASEN': 'no label', 'TIPO_NOM': 'no label', 'delegacion': 'no label', 'NOMASEN': 'no label', });
lyr_XOC1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});