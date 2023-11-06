import { get } from 'lodash-es'
const obj = { a: { b: 1 } }
export const ff = 1
export const a = get(obj, 'a.b')