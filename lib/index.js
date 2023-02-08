/**
 * @typedef {import('vfile').VFile} VFile
 */

import {toESLint} from 'vfile-to-eslint'
import pretty from 'eslint-formatter-pretty'

/**
 * Create a pretty report from files.
 *
 * @param {Array<VFile>} vfiles
 *   Files to report.
 * @returns {string}
 *   Pretty eport.
 */
export function reporterPretty(vfiles) {
  // @ts-ignore: types for `eslint-formatter-pretty` are out of date.
  return pretty(toESLint(vfiles))
}
