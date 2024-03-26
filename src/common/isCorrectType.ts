import getValueType from './getValueType'

const isCorrectType = (val: any, typeVal: string) => {
  if (typeof typeVal === 'string') {
    return getValueType(val) === typeVal.toLocaleLowerCase()
  }
  return getValueType(val) === typeVal
}
export default isCorrectType
