exports.newSuperalgosFunctionLibrariesTaskFunctions = function () {

    let thisObject = {
        taskError: taskError
    }

    return thisObject

    function taskError(node, errorMessage) {
        let event
        if (node !== undefined) {
            event = {
                nodeName: node.name,
                nodeType: node.type,
                nodeId: node.id,
                errorMessage: errorMessage
            }
        } else {
            event = {
                errorMessage: errorMessage
            }
        }
        let key = TS.projects.superalgos.globals.taskConstants.TASK_NODE.name + '-' + TS.projects.superalgos.globals.taskConstants.TASK_NODE.type + '-' + TS.projects.superalgos.globals.taskConstants.TASK_NODE.id
        TS.projects.superalgos.globals.taskConstants.EVENT_SERVER_CLIENT_INSTANCE.raiseEvent(key, 'Error', event)
    }
}