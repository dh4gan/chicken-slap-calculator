/* Javascript to run the exoplanet unit converter
* Written by dh4gan (23-Jan-2019)
*/

var typeChoice = "";
var unitChoice = "";

var slapRate = 0.0;
var heatTransferEfficiency = 0.0;
var handMass = 0.0;
var handVelocity = 0.0;
var surfaceArea = 0.0;

var thermalEmissivity = 1.0;

const stefanBoltzmannConstant = 5.67e-8;
var backgroundTemperature = 0.0;


function obtainValue(elementId)
{
    return Number(document.getElementById(elementId).value)
}

function obtainValues()
{
    
    slapRate = obtainValue("slapratebox");
    heatTransferEfficiency = obtainValue("transferbox")/100.0;
    handMass = obtainValue("handmassbox");
    handVelocity = obtainValue("handvelocitybox");
    surfaceArea = obtainValue("areabox");
    backgroundTemperature = obtainValue("backgroundtemperaturebox") +273.0;

}

function calcEquilibriumTemperature()
{

    obtainValues();
    
    var equilibriumTemperature = (heatTransferEfficiency * handMass * handVelocity * handVelocity * slapRate)/(2.0*surfaceArea*stefanBoltzmannConstant*thermalEmissivity);
    
    equilibriumTemperature = Math.pow(equilibriumTemperature,0.25);

    if(equilibriumTemperature< backgroundTemperature)
    {
	equilibriumTemperature = backgroundTemperature;
    }
    // Convert to degrees C
    equilibriumTemperature -=273.0;
    
    document.getElementById("temperaturebox").innerHTML = equilibriumTemperature+" &#176 C";
    console.log(document.getElementById("temperaturebox").innerHTML);

    if(equilibriumTemperature<0.0)
    {
	document.getElementById("temperaturebox").style.color="blue";
    }
    else if(equilibriumTemperature>100.0)
    {
	document.getElementById("temperaturebox").style.color="red";
    }
    else
    {
	document.getElementById("temperaturebox").style.color="green";
    }
}
