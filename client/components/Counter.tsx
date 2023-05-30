import { useEffect, useState } from 'react'
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
  const { subjectLoading, subjectError, subjectData } = useAppSelector(
    (state) => state.subjects
  )
  const { styleLoading, styleError, styleData } = useAppSelector(
    (state) => state.styles
  )
  const { wildcardLoading, wildcardError, wildcardData } = useAppSelector(
    (state) => state.wildcards
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllSubjects())
    dispatch(getAllWildcards())
    dispatch(getAllStyles())
  }, [dispatch])

  useEffect(() => {
    subjectLoading || styleLoading || wildcardLoading
      ? setLoading(true)
      : setLoading(false)
  }, [subjectLoading, styleLoading, wildcardLoading, setLoading])

  useEffect(() => {
    subjectError || styleError || wildcardError
      ? setError(true)
      : setError(false)
  }, [subjectError, styleError, wildcardError, setError])

  const handleRandomise = () => {
    const randomiseSubjects = Math.floor(Math.random() * 30) + 1
    const randomiseStyles = Math.floor(Math.random() * 30) + 1
    const randomiseWildcards = Math.floor(Math.random() * 30) + 1

    subjectData &&
      styleData &&
      wildcardData &&
      setNumbers([randomiseSubjects, randomiseStyles, randomiseWildcards])
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
