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

    const

    return <></>

    }

export default DashboardPage