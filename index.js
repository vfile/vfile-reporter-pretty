import {toESLint} from 'vfile-to-eslint'
import pretty from 'eslint-formatter-pretty'

export function reporterPretty(vfiles) {
  return pretty(toESLint(vfiles))
}
