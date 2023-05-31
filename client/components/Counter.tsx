import { useEffect } from 'react'
import { getAllSubjects } from '../actions/subjects'
import { useAppDispatch, useAppSelector } from '../hooks'
import { getAllWildcards } from '../actions/wildcards'
import { getAllStyles } from '../actions/styles'

interface Numbers {
  setNumbers: React.Dispatch<React.SetStateAction<number[]>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setError: React.Dispatch<React.SetStateAction<boolean>>
}

const Counter = ({ setNumbers, setLoading, setError }: Numbers) => {
  const dispatch = useAppDispatch()
  const { subjectData, styleData, wildcardData } = useAppSelector((state) => ({
    subjectData: state.subjects.subjectData,
    styleData: state.styles.styleData,
    wildcardData: state.wildcards.wildcardData,
  }))

  useEffect(() => {
    dispatch(getAllSubjects())
    dispatch(getAllWildcards())
    dispatch(getAllStyles())
  }, [dispatch])

  const handleRandomise = () => {
    dispatch(getAllSubjects())
    dispatch(getAllWildcards())
    dispatch(getAllStyles())
    if (subjectData && styleData && wildcardData) {
      const randomiseSubjects =
        Math.floor(Math.random() * subjectData.length) + 1
      const randomiseStyles = Math.floor(Math.random() * styleData.length) + 1
      const randomiseWildcards =
        Math.floor(Math.random() * wildcardData.length) + 1
      setNumbers([randomiseSubjects, randomiseStyles, randomiseWildcards])
    }
  }
  return (
    <div>
      <button
        onClick={() => handleRandomise()}
        className="rounded-xl bg-gradient-to-tr from-teal-500 to-sky-300 py-2 px-4 text-white hover:border-2 hover:border-teal-500 hover:from-white hover:to-white hover:text-teal-500"
      >
        Randomise!
      </button>
    </div>
  )
}

export default Counter
