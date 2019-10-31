import { UPDATE_PERMISSION_ROUTER } from './constants'

export function updatePermissionRouter(data) {
    return {
        type: UPDATE_PERMISSION_ROUTER,
        data
    }
}
