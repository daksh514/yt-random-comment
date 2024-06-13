import {create} from 'zustand'

interface GenerationStore{
    responses: Array<Object>
    setResponses: (responses: Array<Object>) => void
}

export const useGenerationStore = create<GenerationStore>((set) => ({
    responses: [],
    setResponses: (responses: Array<Object>) => set({responses}),
}))