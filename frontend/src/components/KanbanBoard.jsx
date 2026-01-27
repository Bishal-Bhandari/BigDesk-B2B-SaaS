import {userState} from "react"
import {useOrganization} from "@clerk/clerk-react"
import TaskColumn from "./TaskColumn"
import {createTask, updateTask, deleteTask} from "../services/api"

const = ["pending", "started", "completed"]

function kanbanBoard({tasks, setTasks, getToken}){
    const {membership} =useOrganization()
    const [showForm, setShowForm] = useState(false)
    const [editingTask, setEditingTask] = useState(null)

    const role= membership?.role
    const canManage = role =="org:admin" || role == "org:editor"

    function getTasksByStatus(status ){
        return tasks.filter(task => task.status === status)
         }

    function handleEdit(task){
        setEditingTask(task)
        setShowForm(true)
        }

    async function handleDelete(taskId){
        if (!confirm("Are you sure you want to delete this task?")) return

        const
        }


    }