<?php

$action = $_REQUEST['action'];

// get alls positions
    // algorithm for calculate position
    // GMT + 1 Switzerland
    $data = array(
                'results' => array (
                            array(
                                'longitude'    => 13,
                                'latitude'    => 18,
                                'timestamp'    =>    time()             
                                 ),
                            array(
                                'longitude' => 192,
                                'latitude'    => 293,
                                'timestamp'    => time() -3600
                            )
                )
            );
    
    echo json_encode($data);

// get alls positions

// sample : genjson.php?action=POST&long=1243.213&lat=1243.21&control=true
// sample : genjson.php?action=POST&long=1243.213&lat=1243.21&control=false
    
    // insert into the database
    $long = $_REQUEST['long'];
    $lat = $_REQUEST['lat'];
    $type_of_info = $_REQUEST['control'];
    
    echo json_encode( "ok registered ");
    


?>
