
const initState = {
  input: [],
  output: {},
  chapter: {},
  selection: '',
  start: 0,
  end: 0,
  index: 0,
  chapterIdx: -1,
  startIndex: 0,
  endIndex: 0
}

let actions = new Set(['bold', 'italic', 'underline', 'strike'])
function AppReducer(state = initState, action) {
  switch (action.type) {
    case 'LOAD_OUTPUT': {
      const { input: book } = state;
      return { ...state, output: { book: [...book] } }
    }
    case 'LOAD_INPUT': {
      const { input } = action;
      console.log(input)
      let book;
      try {
        book = JSON.parse(input).book || []
      } catch (e) {
        book = []
      }
      return { ...state, input: book, chapter: book[0], chapterIdx: 0 }
    }
    case 'LOAD_CHAPTER':
      const { payload } = action;

      return { ...state, chapter: state.input.find(e => e.sno === payload), chapterIdx: payload }
    case 'UPDATE_START_INDEX': {
      const { index } = action;
      return { ...state, startIndex: index }
    }
    case 'UPDATE_SELECTION': {
      const { start, end, index, selection } = action;
      return { ...state, start, end, index, selection, endIndex: index }
    }
    case 'FORMAT_SELECTION': {
      const { format } = action;
      const { chapter, start, end, index } = state;
      const target = chapter.paras[0].content[index];
      let arr = [];
      const { format: targetFormat = {}, text } = target;
      const key = Object.keys(format)[0]

      if (actions.has(key)) {
        format[key] = !(targetFormat[key] || false);
      }
      if (start !== 0) {
        arr.push({ ...target, text: text.substring(0, start) });
      }
      arr.push({ ...target, text: text.substring(start, end), format: { ...targetFormat, ...format } });
      if (end !== text.length) {
        arr.push({ ...target, text: text.substring(end) });
      }
      console.table(arr)
      chapter.paras[0].content.splice(index, 1, ...arr);
      return { ...state, chapter: { ...chapter } }
    }
    default:
      return state;
  }

}

export default AppReducer;