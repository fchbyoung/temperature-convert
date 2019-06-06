function temperatureConvert(f) {
    f = parseFloat(f);
    document.getElementById('result').innerHTML = "Celcius: " + (f - 32) / 1.8;
}