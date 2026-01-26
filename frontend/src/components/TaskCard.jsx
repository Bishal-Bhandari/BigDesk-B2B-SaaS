function TaskCard({task, onEdit, onDelete}){
    const canEdit=!!onEdit
    const canDelete=!!onDelete

    return <div
        className={`task-card ${canEdit ? 'task-card-clickable': ""}`}
        onClick={canEdit ? => onEdit(task) : undefined}
    >
        <div className={"tsk-card-header"}>
            <h4 className={"task-card-title"}>{task.title}</h4>
            {canDelete}
            </div>
        </div>
    }