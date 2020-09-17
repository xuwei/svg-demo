const isNumber = (value) => {
   return typeof value === 'number' && isFinite(value);
}

export default { isNumber }