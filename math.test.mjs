// math.test.js
import { describe, it, expect } from 'vitest'
import { add } from './math.mjs'

describe('add()', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })
})
