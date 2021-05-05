/**
 * @typedef {import('vfile').VFile} VFile
 */

import {toESLint} from 'vfile-to-eslint'
import pretty from 'eslint-formatter-pretty'

/**
 * @param {Array.<VFile>} vfiles
 * @returns {string}
 */
export function reporterPretty(vfiles) {
  return pretty(toESLint(vfiles))
}
