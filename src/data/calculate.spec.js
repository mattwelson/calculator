import { calculate } from './calculate'

describe ('calculate()', () => {
  it ('handles AC', () => {
    const state = {
      total: 50,
      next: '2',
      operation: 'x'
    }
    const nextState = calculate(state, 'AC')
    expect(nextState).toEqual({
      total: 0,
      next: null,
      operation: null
    })
  })

  describe ('handles =', () => {
    it ('handles % operation', () => {
      const state = {
        total: 23,
        next: '10',
        operation: '%'
      }
      const newState = calculate(state, '=')
      expect(newState).toEqual({
        total: 3,
        next: null,
        operation: null
      })
    })

    it ('handles ÷ operation', () => {
      const state = {
        total: 50,
        next: '2',
        operation: '÷'
      }
      const newState = calculate(state, '=')
      expect(newState).toEqual({
        total: 25,
        next: null,
        operation: null
      })
    })

    it ('handles / operation', () => {
      const state = {
        total: 50,
        next: '2',
        operation: '/'
      }
      const newState = calculate(state, '=')
      expect(newState).toEqual({
        total: 25,
        next: null,
        operation: null
      })
    })

    it ('handles x operation', () => {
      const state = {
        total: 50,
        next: '2',
        operation: 'x'
      }
      const newState = calculate(state, '=')
      expect(newState).toEqual({
        total: 100,
        next: null,
        operation: null
      })
    })

    it ('handles * operation', () => {
      const state = {
        total: 50,
        next: '2',
        operation: '*'
      }
      const newState = calculate(state, '=')
      expect(newState).toEqual({
        total: 100,
        next: null,
        operation: null
      })
    })

    it ('handles - operation', () => {
      const state = {
        total: 50,
        next: '2',
        operation: '-'
      }
      const newState = calculate(state, '=')
      expect(newState).toEqual({
        total: 48,
        next: null,
        operation: null
      })
    })

    it ('handles - operation if next is null and total 0', () => {
      const state = {
        total: 0,
        next: null,
        operation: null
      }
      const newState = calculate(state, '-')
      expect(newState).toEqual({
        next: '-'
      })
      expect(calculate(newState, '9')).toEqual({
        next: '-9'
      })
    })

    it ('handles + operation', () => {
      const state = {
        total: 50,
        next: '2',
        operation: '+'
      }
      const newState = calculate(state, '=')
      expect(newState).toEqual({
        total: 52,
        next: null,
        operation: null
      })
    })


    describe ('invalid use', () => {
      it ('pushed with default state', () => {
        const state = {
          total: 0,
          next: null,
          operation: null
        }
        expect(calculate(state, '=')).toEqual({})
      })

      it ('pushed with operation but no next', () => {
        const state = {
          total: 2,
          next: null,
          operation: 'x'
        }
        expect(calculate(state, '=')).toEqual({})
      })
    })
  })

  describe ('handles +/-', () => {
    it ('handles positive next', () => {
      const state = {
        next: '45'
      }
      expect(calculate(state, '+/-')).toEqual({
        next: '-45'
      })
    })

    it ('handles negative next', () => {
      const state = {
        next: '-45.5'
      }
      expect(calculate(state, '+/-')).toEqual({
        next: '45.5'
      })
    })

    it ('handles no next', () => {
      const state = {
        next: null,
        total: 1
      }
      expect(calculate(state, '+/-')).toEqual({
        total: -1
      })
    })

    it ('handles incomplete next strings', () => {
      const state = {
        next: '4.'
      }
      expect(calculate(state, '+/-')).toEqual({
        next: '-4'
      })
    })
  })

  describe ('handles .', () => {
    it ('adds . to the end', () => {
      const state = {
        next: '5'
      }
      expect(calculate(state, '.')).toEqual({
        next: '5.'
      })
    })

    it ('adds a zero if next is null', () => {
      const state = {
        next: null
      }
      expect(calculate(state, '.')).toEqual({
        next: '0.'
      })
    })

    it ('does nothing if next already has .', () => {
      const state = {
        next: '5.5'
      }
      expect(calculate(state, '.')).toEqual({})
    })
  })

  describe ('handles operations', () => {
    it ('sets operation', () => {
      const state = {
        next: '10',
      }
      expect(calculate(state, '+')).toEqual({
        operation: '+',
        total: 10,
        next: null
      })
    })

    it ('performs previous operation', () => {
      const state = {
        next: '10',
        operation: 'x',
        total: 2
      }
      expect(calculate(state, '+')).toEqual({
        operation: '+',
        total: 20,
        next: null
      })
    })

    it ('does nothing if next and total are null', () => {
      expect(calculate({}, 'x')).toEqual({
        operation: 'x'
      })
    })

    // this is the state if you perform one operation and
    //try to do the next operation afterwards
    it ('uses total if next is null', () => {
      const state = {
        total: 20,
        next: null,
        operation: null
      }
      expect(calculate(state, '+')).toEqual({
        operation: '+'
      })
    })

    describe ('invalid cases', () => {
      it ('handles multiple operations in a row', () => {
        const state = {
          total: 2,
          next: null,
          operation: 'x'
        }
        expect(calculate(state, '+')).toEqual({
          operation: '+'
        })
      })
    })
  })

  describe ('add number', () => {
    it ('sets number if next is null', () => {
      expect(calculate({}, '9')).toEqual({
        next: '9'
      })
    })

    it ('appends number if null is no empty', () => {
      expect(calculate({ next: '9' }, '2')).toEqual({
        next: '92'
      })
    })
  })
})
