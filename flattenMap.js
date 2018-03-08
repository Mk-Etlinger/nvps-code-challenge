function flattenMap( map, flattened = {}, parents = [] ) {
  Object.keys( map ).forEach( key => {
    if ( isValidObject( map[key] )) {
      parents.push( key )
      flattenMap( map[key], flattened, parents )
    } else {
      let newKey = [...parents, key].join( '/' )
      flattened[newKey] = map[key]
    }
  }) 
  parents.pop()
  return flattened
}

function isValidObject( value ) {
  return value !== null && 
    typeof value !== 'function' &&
    !Array.isArray( value ) &&
    typeof value === 'object' 
}