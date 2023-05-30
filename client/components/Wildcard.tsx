import { Subjects } from '../../models/subjects'
import { getSingleWildcard } from '../actions/wildcards'
import { useAppDispatch, useAppSelector } from '../hooks'
import { useEffect } from 'react'
import { Numbers } from './Style'

const Wildcard = ({ numbers, setError, setLoading }: Numbers) => {
  const dispatch = useAppDispatch()
  const { wildcardLoading, wildcardError, wildcardData } = useAppSelector(
    (state) => state.wildcard
  )

  useEffect(() => {
    dispatch(getSingleWildcard(numbers[2]))
  }, [numbers, dispatch])

  useEffect(() => {
    wildcardLoading ? setLoading(true) : setLoading(false)
  })

  useEffect(() => {
    wildcardError ? setError(true) : setError(false)
  })

  if (wildcardLoading) {
    return <div>Loading...</div>
  }

  if (wildcardError) {
    return <div>Error: {wildcardError}</div>
  }

  return (
    <div>
      {wildcardData &&
        wildcardData.map((item: Subjects) => {
          return (
            <p key={item.id} className="text-teal-600">
              {item.name}
            </p>
          )
        })}
    </div>
  )
}

export default Wildcard
