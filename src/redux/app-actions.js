export const loadChapter = (payload) => {
  return {
    type: 'LOAD_CHAPTER',
    payload
  }
}

export const updateSelection = (start, end, index, selection) => {
  return {
    type: 'UPDATE_SELECTION',
    start, end, index, selection
  }
}
export const updateStartIndex = (index) => {
  return {
    type: 'UPDATE_START_INDEX',
    index
  }
}

export const formatSelection = (format) => {
  return {
    type: 'FORMAT_SELECTION',
    format
  }
}

export const loadInput = (input) => {
  return {
    type: 'LOAD_INPUT',
    input
  }
}
export const loadOutput = () => {
  return {
    type: 'LOAD_OUTPUT'
  }
}