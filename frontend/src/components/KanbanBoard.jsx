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

        const taskToDelete = tasks.find(t => t.id === taskId)
        setTasks(prev => prev.filter(t => t.id !== taskId))

        try{
            await deleteTask(getToken, taskId)
            } catch (err) {
                setTasks(prev => [...prev, taskToDelete])
                console.error("Failed to delete task:", err)
                }
        }
    async function handleSubmit(taskData){
        if(editingTask){
            const updateTask = {...editingTask, ...taskdata}
            setTasks(prev => prev.map(t=> t.id === editingTask.id ? updatedTask : t))
            setShowForm(false)
            setEditingTask(null)

            try{
                await updateTask(getToken, editingTask.id, taskData)
                } catch (err) {
                    setTasks(prev => prev.map(t => t.id === editingTask.id ? editingTask : t))
                    console.error("Failed to update task:", err)
                    }
            } else {
                try {
                    const newTask = await createTask(getToken, taskData)
                    setTasks(prev => [...prev, newTask])
                    setShowForm(false)
                    } catch (err){
                        console.error(err)
                        }
                }
        }

    function

    }