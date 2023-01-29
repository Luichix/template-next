import { describe, expect, test } from '@jest/globals'

describe('Home', () => {
  test('test', () => {
    const test = 'Hello World'
    expect(test).toContain('Hello')
  })
})
