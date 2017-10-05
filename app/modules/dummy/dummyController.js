import DummyModel from './dummyModel'

let dM = new DummyModel();
function somFooFunc() {
    dM.someModelFunc(); 
    console.log("someFooFunc in dummy controller");
}

function someBarFunc() {
    console.log("someBarFunc in dummy controller"); 
}

export { somFooFunc, someBarFunc };