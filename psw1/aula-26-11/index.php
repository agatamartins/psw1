<?php
 if(is_null($var)) {
 echo "Variável" . "\$var" . "é nula/vazia!" . "<br>";
 }
 $var = "Bill GAtes";
 if(is_string($var)) {
 echo "Variável \$var" . "é uma string!<br>";
 }
 $var = "a12";
 if(is_integer($var)) {
 echo "Variável \$var é um inteiro!<br>";
 }
 $var = false;
 if(is_bool($var)) {
 echo "Variável \$var é booleana!";
 }
 // is_float(), is_array(), is_object()
?>