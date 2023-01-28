import { describe, expect, test } from '@jest/globals'

describe('Home', () => {
  test('test', () => {
    const test = 'Hello'
    expect(test).toContain('Hello')
  })
})
