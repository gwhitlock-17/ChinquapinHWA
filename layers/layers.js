var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ChinquapinHOA_HemlockTreatmentList_1 = new ol.format.GeoJSON();
var features_ChinquapinHOA_HemlockTreatmentList_1 = format_ChinquapinHOA_HemlockTreatmentList_1.readFeatures(json_ChinquapinHOA_HemlockTreatmentList_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChinquapinHOA_HemlockTreatmentList_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChinquapinHOA_HemlockTreatmentList_1.addFeatures(features_ChinquapinHOA_HemlockTreatmentList_1);
var lyr_ChinquapinHOA_HemlockTreatmentList_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChinquapinHOA_HemlockTreatmentList_1, 
                style: style_ChinquapinHOA_HemlockTreatmentList_1,
                popuplayertitle: 'Chinquapin-HOA_Hemlock-Treatment-List',
                interactive: true,
    title: 'Chinquapin-HOA_Hemlock-Treatment-List<br />\
    <img src="styles/legend/ChinquapinHOA_HemlockTreatmentList_1_0.png" /> soil<br />\
    <img src="styles/legend/ChinquapinHOA_HemlockTreatmentList_1_1.png" /> spray<br />\
    <img src="styles/legend/ChinquapinHOA_HemlockTreatmentList_1_2.png" /> trunk injection<br />\
    <img src="styles/legend/ChinquapinHOA_HemlockTreatmentList_1_3.png" /> not specified<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_ChinquapinHOA_HemlockTreatmentList_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ChinquapinHOA_HemlockTreatmentList_1];
lyr_ChinquapinHOA_HemlockTreatmentList_1.set('fieldAliases', {'uuid': 'uuid', 'geographic area': 'geographic area', 'longitude': 'longitude', 'latitude': 'latitude', 'treatmentdate': 'treatmentdate', 'chemical1': 'chemical1', 'chemical2': 'chemical2', 'treatmenttype': 'treatmenttype', 'color1': 'color1', 'color2': 'color2', 'dbh': 'dbh', 'event': 'event', });
lyr_ChinquapinHOA_HemlockTreatmentList_1.set('fieldImages', {'uuid': 'TextEdit', 'geographic area': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'treatmentdate': 'TextEdit', 'chemical1': 'TextEdit', 'chemical2': 'TextEdit', 'treatmenttype': 'TextEdit', 'color1': 'TextEdit', 'color2': 'TextEdit', 'dbh': 'Range', 'event': 'TextEdit', });
lyr_ChinquapinHOA_HemlockTreatmentList_1.set('fieldLabels', {'uuid': 'inline label - visible with data', 'geographic area': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'treatmentdate': 'inline label - visible with data', 'chemical1': 'inline label - visible with data', 'chemical2': 'inline label - visible with data', 'treatmenttype': 'inline label - visible with data', 'color1': 'inline label - visible with data', 'color2': 'inline label - visible with data', 'dbh': 'inline label - visible with data', 'event': 'inline label - visible with data', });
lyr_ChinquapinHOA_HemlockTreatmentList_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});