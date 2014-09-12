<?php
 
/*
 * Following code will delete a product from table
 * A product is identified by product id (id)
 */
 
// array for JSON response
$response = array();
 
// check for required fields
if (isset($_POST['id'])) {
    $id = $_POST['id'];
 
    // include db connect class
    require_once __DIR__ . '/inc/db_connect.php';
 
    // connecting to db
    $db = new DB_CONNECT();
 
    // mysql update row with matched id
    $result = mysql_query("DELETE FROM products WHERE id = $id");
 
    // check if row deleted or not
    if (mysql_affected_rows() > 0) {
        // successfully updated
        $response["success"] = 1;
        $response["message"] = "product successfully deleted";
 
        // echoing JSON response
        echo json_encode($response);
    } else {
        // no product found
        $response["success"] = 0;
        $response["message"] = "no product found";
 
        // echo no users JSON
        echo json_encode($response);
    }
} else {
    // required field is missing
    $response["success"] = 0;
    $response["message"] = "required field(s) is missing";
 
    // echoing JSON response
    echo json_encode($response);
}
?>