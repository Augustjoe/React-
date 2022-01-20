import store from 'store';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    saveData(key = "USER_KEY", data) {
        store.set(key, data)
    },
    getData(key = "USER_KEY") {
        return store.get(key)
    },
    removeData(key = "USER_KEY") {
        store.remove(key)
    }
}

