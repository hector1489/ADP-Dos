import { createContext, useState, useMemo } from 'react'

export interface VideoItem {
  urlVideo: string
  title: string
  description: string
}

export interface DataContextProps {
  videos: VideoItem[]
  setVideos: React.Dispatch<React.SetStateAction<VideoItem[]>>
}

const DataContext = createContext<DataContextProps>({
  videos: [],
  setVideos: () => {}
})

interface DataContextProviderProps {
  children: React.ReactNode
}

const DataContextProvider: React.FC<DataContextProviderProps> = ({ children }) => {
  const [videos, setVideos] = useState<VideoItem[]>([])

  const contextValue = useMemo(() => ({
    videos,
    setVideos
  }), [videos, setVideos])

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataContextProvider }
