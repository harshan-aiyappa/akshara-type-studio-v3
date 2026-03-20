
if (app.textPreferences.hasOwnProperty("shapeIndicAndLatinWithHarbuzz" )) {
    if (app.textPreferences.shapeIndicAndLatinWithHarbuzz) {
        app.textPreferences.shapeIndicAndLatinWithHarbuzz = false;
        alert("HarfBuzz Text Shaping Engine DEACTIVATED", "Harfbuzz Engine");
    }
    else {
        app.textPreferences.shapeIndicAndLatinWithHarbuzz = true;
        alert("HarfBuzz Text Shaping Engine ACTIVATED", "Harfbuzz Engine");
    }

}
else {
    alert("HarfBuzz Text Shaping Engine not found", "Harfbuzz Engine");
}