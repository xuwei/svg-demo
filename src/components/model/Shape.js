const TypeOfShape = {
    Rectangle : 'r', 
    Circle : 'c',
    Polygon : 'p'
}

const GlobalErrors = {
    InvalidDimension : "Invalid dimensions. Element size cannot exceed 250.",
    EmptyOrInvalidFormatInput : "Empty or invalid format input. Please check usage examples.",
    Generic : "Input is invalid, please check usage examples."
}

const Constants = {
    maxSize : 250
}

class Shape {
    constructor(type) {
        this.type = type
    }
}

export default Shape
export { Constants, TypeOfShape, GlobalErrors }