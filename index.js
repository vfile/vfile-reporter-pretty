/**
 * @typedef {import('vfile').VFile} VFile
 */

import {toESLint} from 'vfile-to-eslint'
import pretty from 'eslint-formatter-pretty'

/**
 * @param {Array<VFile>} vfiles
 * @returns {string}
 */
export function reporterPretty(vfiles) {
  // @ts-ignore: types for `eslint-formatter-pretty` are out of date.
  return pretty(toESLint(vfiles))
}

export default reporterPretty
