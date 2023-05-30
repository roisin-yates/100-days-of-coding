import { Subjects } from '../../models/subjects'
import { getSingleSubject } from '../actions/subjects'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useEffect } from 'react'
import { Numbers } from './Style'

const Subject = ({ numbers, setError, setLoading }: Numbers) => {
  const dispatch = useAppDispatch()
  const { subjectLoading, subjectError, subjectData } = useAppSelector(
    (state) => state.subject
  )

  useEffect(() => {
    dispatch(getSingleSubject(numbers[1]))
  }, [numbers, dispatch])

  useEffect(() => {
    subjectLoading ? setLoading(true) : setLoading(false)
  })

  useEffect(() => {
    subjectError ? setError(true) : setError(false)
  })

  if (subjectLoading) {
    return <div>Loading...</div>
  }

  if (subjectError) {
    return <div>Error: {subjectError}</div>
  }

  return (
    <div>
      {subjectData &&
        subjectData.map((item: Subjects) => {
          return (
            <p key={item.id} className="text-teal-600">
              {item.name}
            </p>
          )
        })}
    </div>
  )
}

export default Subject
