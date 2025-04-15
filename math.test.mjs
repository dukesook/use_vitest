// math.test.js
import { describe, it, expect } from 'vitest'
import { add, subtract, multiply, divide } from './math.mjs'

describe('Test add function', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })
})


describe('Test subtract function', () => {
  it('subtracts two numbers', () => {
    expect(subtract(5, 2)).toBe(3)
  })
})


describe('Test multiply function', () => {
  it('multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12)
  })
})


describe('Test divide function', () => {
  it('divides two numbers', () => {
    expect(divide(8, 2)).toBe(4)
  })

  it('throws error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed.")
  })
});