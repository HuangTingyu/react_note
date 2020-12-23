const defaultState = {
    inputValue: "",
    list:[]
}

let reducer = (state = defaultState, action) => {
    if (action.type === "change_input_value") {
        // 深拷贝
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState
    }
    if (action.type === "add_todo_item") {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ""
        return newState
    }
    return state;
}

// 设置默认值
export default reducer
   