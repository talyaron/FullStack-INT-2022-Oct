//defines all input types level for html tags//
var inputType = /** @class */ (function () {
    function inputType(typeName) {
        this.typeName = typeName;
    }
    return inputType;
}());
var inputTypes = [];
var newInputType = new inputType("H1");
inputTypes.push(newInputType);
newInputType = new inputType("H2");
inputTypes.push(newInputType);
newInputType = new inputType("H3");
inputTypes.push(newInputType);
newInputType = new inputType("H4");
inputTypes.push(newInputType);
newInputType = new inputType("H5");
inputTypes.push(newInputType);
newInputType = new inputType("H6");
inputTypes.push(newInputType);
newInputType = new inputType("p");
inputTypes.push(newInputType);
//end of defines all input types level for html tags//
//defines the input field in the document//
var docField = /** @class */ (function () {
    function docField(fieldType, fieldData) {
        this.fieldType = fieldType;
        this.fieldData = fieldData;
    }
    return docField;
}());
//end of defines the input field in the document//
