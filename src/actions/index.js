export const SELECT_TYPE = 'SELECT_TYPE';

export function selectType(newType) {
  return {
    type: SELECT_TYPE,
    newType
  }
}
