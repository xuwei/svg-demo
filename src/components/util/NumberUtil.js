const isNumber = (value) => {
   let val = Number(value)
   return typeof val === 'number' && isFinite(val);
}

export default { isNumber }