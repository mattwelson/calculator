const newObject = {
  total: 0,
  next: null,
  operation: null
}

export const operate = (state) => {
  switch (state.operation) {
    case '%':
      return {
      ...newObject,
        total: state.total % parseFloat(state.next),
      }
    case '÷':
    case '/':
      return {
      ...newObject,
        total: state.total / parseFloat(state.next),
      }
    case 'x':
    case '*':
      return {
      ...newObject,
        total: state.total * parseFloat(state.next),
      }
    case '-':
      return {
      ...newObject,
        total: state.total - parseFloat(state.next),
      }
    case '+':
      return {
      ...newObject,
        total: state.total + parseFloat(state.next),
      }
    default:
      return {}
  }
}

export const calculate = (state, op) => {
  switch (op) {
    case 'AC':
      return {
        ...newObject
      }
    case '=':
      if (!state.next) return {}
      return operate(state)
    case '+/-':
      if (!state.next) return {
        total: parseFloat(state.total) * -1
      }
      return {
        next: parseFloat((state.next) * -1).toString()
      }
    case '.':
      if (!state.next) return { next: '0.' }
      if (state.next.indexOf('.') > -1) return {}
      return {
        next: `${ state.next }.`
      }
    case '%':
    case '/':
    case '÷':
    case 'x':
    case '*':
    case '-':
    case '+':
      if (!state.next) {
        return { operation: op }
      }
      if (state.operation) {
        return {
          ...operate(state),
          operation: op
        }
      }
      return {
        total: parseFloat(state.next),
        next: null,
        operation: op
      }
    default: // numbers
      return {
        next: `${state.next || ''}${op}`
      }
  }
}

export default {
  calculate,
  operate
}
