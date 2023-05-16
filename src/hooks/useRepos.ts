import {useQuery} from '@tanstack/react-query'

import api from "@/api/github"
import { Repository } from './types'


const fetchRepos = async () => {
    const {data} = await api.get<Repository[]>('/users/dalowa/repos')
    return data
}

export function useFetchRepos(){
    return useQuery(['repos'], fetchRepos)
}