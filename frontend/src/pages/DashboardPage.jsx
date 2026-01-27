import {useState, useEffect, useCallback} from "react"
import {useAuth, useOrganization, CreateOrganization} from "@clerk/clerk-react";
import {getTasks} from "../services/api"
import KanbanBoard from "../components/KanbanBoard.jsx"

function DashboardPage(){
    const {getToken} = useAuth()
    const {organization, membership} = useOrganization(
        {membership: {infinite: true}}
        )
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const memberCount = membership?.count ?? 0
    const orgId = organization?.orgId

    const loadTasks = useCallback(async () => {
        try{
            setLoading(true)
            setError(null)
            const data = await getTasks(getToken)
            setTasks(data)
            } catch (err){
                setError(err.message)
                } finally {
                    setLoading(false)
                    }
        }, [getToken])

    return <></>

    }

export default DashboardPage