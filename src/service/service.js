
export default {


    getUserContext(username) {
        if (!window.localStorage.getItem("usnames"))
            window.localStorage.setItem("usnames", [])

        let users = window.localStorage.getItem("usnames").split(",")

        if (!users.includes(username))
        {
            users.push(username)
            window.localStorage.setItem("usnames", users)
            window.localStorage.setItem(username, JSON.stringify({
                1: {
                    name: "Новая заметка",
                    description: "",
                    todoList: ""
                },
            }))
        }
        return JSON.parse(window.localStorage.getItem(username))
    }



}