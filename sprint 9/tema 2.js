const getNewObjectDeleteProp = (obj, properties) => {
  const newObject = {...obj};
  properties.forEach(property => {
    delete newObject[property];
  }); 

  return newObject;
}
const object = {
  a: 1,
  b: 2
}
const propertiesToRemove = ["b"];
console.log(getNewObjectDeleteProp(object, propertiesToRemove));
  