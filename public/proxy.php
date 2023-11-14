<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Get the target URL from the 'url' query parameter
$url = $_GET['url'];

// Get the JSON data from the request body
$data = file_get_contents('php://input');

// Set the content type and content length of the response
header('Content-Type: application/json');
header('Content-Length: ' . strlen($data));

// Initialize a cURL session
$ch = curl_init($url);

// Set the cURL options
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data)
));

// Execute the cURL session and echo the response
$response = curl_exec($ch);
echo $response;

// Close the cURL session
curl_close($ch);
?>
