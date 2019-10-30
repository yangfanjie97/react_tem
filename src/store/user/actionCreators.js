import { UPDATE_USER_TOKEN } from './constants'

export function updateUserToken(data) {
    return {
        type: UPDATE_USER_TOKEN,
        data
    }
}
