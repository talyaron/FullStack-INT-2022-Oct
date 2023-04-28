//defines all input types level for html tags//

class inputType {
  constructor(public typeName: any) {}
}

const inputTypes: inputType[] = [];

let newInputType: inputType = new inputType("H1");
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

class docField {
  constructor(public fieldType: inputType, public fieldData: any) {}
}

//end of defines the input field in the document//
